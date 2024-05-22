package myconext.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UpdateLinkedAccountRequest implements Serializable {

    private String eduPersonPrincipalName;
    private String subjectId;
    private boolean external;



}
