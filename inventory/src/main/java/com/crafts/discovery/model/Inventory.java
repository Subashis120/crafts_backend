package com.crafts.discovery.model;

import com.crafts.discovery.common.Base;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "inventory")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Inventory extends Base implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NonNull()
    private String itemName;
    @NonNull
    private String category;
    @NonNull
    private String stock;
    @NonNull
    private String itemId;

}
