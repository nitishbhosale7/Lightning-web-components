public with sharing class documentHandler {
    @AuraEnabled
    public static string getFile(string id){

        ContentDocumentLink image = [SELECT ContentDocument.title , ContentDocumentID FROM ContentDocumentLink WHERE ContentDocumentId =:id];
    image.ShareType = 'v';
    image.visibility= 'AllUsers';


    ContentDistribution cd1 =  new ContentDistribution();

    cd1.ContentVersionId=[SELECT Id  FROM Contentversion WHERE ContentDocumentId =:id].id;
    cd1.name=[Select ContentDocument.title , ContentDocumentID FROM ContentDocumentLink WHERE ContentDocumentId =:id ].ContentDocument.title;

    return cd1.ContentDownloadUrl;
    
 
}
}