package com.demo.fback.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/wikidata")
@CrossOrigin(origins = "http://localhost:4200")
public class WikiController {
    @GetMapping("/search")
    public ResponseEntity<String> searchWikidata(@RequestParam String query) {
        String apiUrl = "https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=en&search=" + query;
        
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);
        
        return ResponseEntity.ok(response.getBody());
    }

    @GetMapping("/details")
    public ResponseEntity<String> getEntityDetails(@RequestParam String entityId) {
        String apiUrl = "https://www.wikidata.org/wiki/Special:EntityData/" + entityId + ".json";

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return ResponseEntity.ok(response.getBody());
    }
}
