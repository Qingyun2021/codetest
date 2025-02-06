package com.demo.fback.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Result<E> {
    private Integer code; // status data, 0 for success, 1 for failed
    private String message; // message for hints
    private E data; // response data
    // return the response result with response result
    public static <E> Result<E> success(E data) {
        return new Result<>(0, "successful", data);
    }
    // return the response result
    public static <E> Result<E> success() {
        Result<E> result = new Result<>();
        result.code = 0;
        result.data = null;
        result.message = "success";
        return result;
    }

    public static <E> Result<E> error(String message){
        Result<E> result = new Result<>();
        result.code = 1;
        result.data = null;
        result.message = message;
        return result;
    }

}
