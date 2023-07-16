public class sponnacularReciepes {

    private static final string APIKey='0f5a98868edd4353b815db9b9d81b00b';
    private static final string  APIName='https://api.spoonacular.com/recipes';
    
    public static string getRandomReceipes(){
        
        Http http = new Http();
        httpRequest request = new httpRequest();
        request.setEndPoint(APIName + '/random' + '?apiKey=' + APIKey);
        request.setMethod('GET');
        
        httpResponse response = http.send(request);
        
        if(response.getStatusCode() == 200){
           string receipies =  response.getBody();
            return receipies;
        }      
        return '';    
    }
    
     public static string getRandomReceipesById(string rID){
        
        Http http = new Http();
        httpRequest request = new httpRequest();
        request.setEndPoint(APIName +rID+ '/information' + '?apiKey=' + APIKey);
        request.setMethod('GET');
        
        httpResponse response = http.send(request);
        
        if(response.getStatusCode() == 200){
           string receipies =  response.getBody();
            return receipies;
        }      
        return '';    
    }
    
     public static string getRandomReceipesByIngredients(string ingredients){
        
        Http http = new Http();
        httpRequest request = new httpRequest();
        request.setEndPoint(APIName +  '/findByIngredients' + '?apiKey=' + APIKey + '&ingredients=' + ingredients);
        request.setMethod('GET');
        
        httpResponse response = http.send(request);
        
        if(response.getStatusCode() == 200){
           string receipies =  response.getBody();
            return receipies;
        }      
        return '';    
    }
}