package com.demo.fback.pojo;

import lombok.Data;

@Data
public class WikidataSearchEntry {
    private Long id;
    private String query;
    private String result;
}
