package com.crafts.discovery.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public abstract class Base implements Serializable {

    private static final long serialVersionUID = 1L;

    @CreatedDate
    private Date createdOn;
    @LastModifiedDate
    private Date lastUpdatedOn;
}
