package com.figma.backend;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@RestController
@RequestMapping("/json")
public class JSONController {

    @GetMapping()
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<String> getJson(@RequestBody User user) {
        // set response headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-type", "application/text");
        headers.set("Access-Control-Allow-Origin","*");
        try {
            // connection data
            String figmaUserToken, figmaFileID, url;
            figmaUserToken = user.getFigmaUserToken();
            figmaFileID = user.getFigmaFileID();

            url = "https://api.figma.com/v1/files/" + figmaFileID;

            // open a connection
            URL link = new URL(url);
            HttpURLConnection con = (HttpURLConnection) link.openConnection();
            con.setRequestProperty("X-Figma-Token", figmaUserToken);

            // get a json file
            BufferedReader response = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String responseLine;
            StringBuilder json = new StringBuilder();
            while ((responseLine = response.readLine()) != null) {
                json.append(responseLine);
            }
            response.close();

            return new ResponseEntity<String>(json.toString(),HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.toString(),HttpStatus.NOT_FOUND);
        }
    }
}
