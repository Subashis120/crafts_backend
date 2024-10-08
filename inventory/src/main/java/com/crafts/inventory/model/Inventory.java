package com.crafts.inventory.model;

import com.crafts.inventory.common.Base;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

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

    @NonNull
    private String itemName;
    @NonNull
    private String category;
    @NonNull
    private String stock;
    @NonNull
    private String itemId;

    private String price;

    private String color;

    private List<String> images = new ArrayList<>();

}
