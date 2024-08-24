package com.crafts.inventory.model;

import com.crafts.inventory.common.Base;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "cart")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Cart extends Base implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NonNull
    private String userId;
    @NonNull
    private String itemId;
    @NonNull
    private String quantity;
    @NonNull
    private String totalPrice;
}
