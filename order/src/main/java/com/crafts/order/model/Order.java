package com.crafts.order.model;

import com.crafts.order.common.Base;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order extends Base implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NonNull()
    private String qty;
    @NonNull
    private String category;
    @NonNull
    private String itemId;

}
