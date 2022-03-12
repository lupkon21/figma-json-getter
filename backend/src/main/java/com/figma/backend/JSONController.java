package com.figma.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@RestController
@RequestMapping("/json")
public class JSONController {

    @GetMapping()
    public String getJson() {
        try {
            // connection data
            String figmaToken, fileId, url;
            figmaToken = "";
            fileId = "";
            url = "https://api.figma.com/v1/files/" + fileId;

            // open a connection
            URL link = new URL(url);
            HttpURLConnection con = (HttpURLConnection) link.openConnection();
            con.setRequestProperty("X-Figma-Token", figmaToken);

            // get a json file
            BufferedReader response = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String responseLine;
            StringBuilder json = new StringBuilder();
            while ((responseLine = response.readLine()) != null) {
                json.append(responseLine);
            }
            response.close();

            return json.toString();
        } catch (Exception e) {
            return e.toString();
        }
    }
}
