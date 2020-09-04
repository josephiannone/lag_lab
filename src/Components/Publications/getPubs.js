//From "http://www.alexhadik.com/blog/2014/6/12/create-pubmed-citations-automatically-using-pubmed-api" adapted from reply to blog post by Les Ansley

let HTMLpublication = '%authors% (%date%) \'%title%\' <i>%journal%</i>,<b>%volume%</b> %issue%%pages%PMID:<a id=publink href="%data%"target="_blank"> %PMID% </a></br></br>' //Formats output

let publications, idStringList;
let pubmedSearchAPI = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?";
let pubmedSummaryAPI = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?";
let database = "db=pubmed";
let returnmode = "&retmode=json";
let returnmax = "&retmax=100";
let searchterm = "&term=Lagunoff M[Author] NOT Correction[Title]";
let returntype = "&rettype=abstract";
let idURL = pubmedSearchAPI + database + returnmode + returnmax + searchterm
console.log(idURL);

const main = () => {

    let res = '';

    let getPubmed = function(url) { //passed url
        return new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('get', url, true, );
            xhr.responseType = 'json';
            xhr.onload = function() {
                let status = xhr.status;
                if (status === 200) { //status 200 signifies OK (http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp)
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send();
        });
    };
    getPubmed(idURL).then(function(data) {
        let idList = data.esearchresult.idlist;
        idStringList = idList.toString(); //converts the idlist to a string to be appended to the search url
        idStringList = '&id=' + idStringList;
        let summaryURL = pubmedSummaryAPI + database + returnmode + returntype + idStringList;
        getPubmed(summaryURL).then(function(summary) {
            publications = formatReferences(summary);
            document.getElementById("pubs").innerHTML = publications;
            res = publications
            console.log(res)
        }, function(status) {
            res = 'Something went wrong getting the ids.';
        });
    }, function(status) {
        res = 'Something went wrong getting the ids.';
    });


    function formatReferences(summary) {
        let publicationList = '';
        for (let refs in summary.result) {
            if (refs !== 'uids') {
                let authors = '';
                let publication = '';
                let authorCount = ((summary.result[refs].authors).length);
                let i = 0;
                while (i < authorCount - 1) {
                    authors += summary.result[refs].authors[i].name + ', ';
                    i++;
                }
                publication = HTMLpublication.replace('%data%', 'http://www.ncbi.nlm.nih.gov/pubmed/' + refs);
                authors += summary.result[refs].lastauthor;
                publication = publication.replace('%authors%', authors);
                publication = publication.replace('%title%', summary.result[refs].title);
                publication = publication.replace('%journal%', summary.result[refs].source);
                publication = publication.replace('%PMID%', summary.result[refs].uid);
                //Alter formatting if article is In Press
                if (summary.result[refs].volume !== '') {
                    publication = publication.replace('%volume%', ' ' + summary.result[refs].volume);
                    publication = publication.replace('%issue%', '(' + summary.result[refs].issue + ')');
                    publication = publication.replace('%pages%', ': ' + summary.result[refs].pages + '. ');
                    let date = summary.result[refs].pubdate.slice(0, 4);
                    publication = publication.replace('%date%', date + '');
                } else {
                    publication = publication.replace('%volume%', ' In Press');
                    publication = publication.replace('%issue%', '.');
                    publication = publication.replace('%pages%', '');
                    publication = publication.replace('%date%', '');
                }
                publicationList = publication + publicationList;
            }
        }
        return (publicationList);
    }
    return res;
}

export default main