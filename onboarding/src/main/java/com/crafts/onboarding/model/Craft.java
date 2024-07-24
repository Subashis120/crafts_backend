package com.crafts.onboarding.model;

import com.crafts.onboarding.common.Base;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "craft")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Craft extends Base implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NonNull()
    private String name;
    @NonNull
    private String category;
    @NonNull
    private String price;

    private String itemId;

}
