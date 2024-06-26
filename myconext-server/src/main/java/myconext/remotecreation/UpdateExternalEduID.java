package myconext.remotecreation;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import myconext.model.Verification;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Getter
@Setter
public class UpdateExternalEduID extends NewExternalEduID {

    @NotBlank
    @Schema(description = "Generated by the RemoteCreation POST API, must be send with PUT update requests")
    private String eduIDValue;

    public UpdateExternalEduID(String email, String eduIDValue, @NotBlank String chosenName, String firstName, String lastNamePrefix, @NotBlank String lastName, String dateOfBirth, @NotBlank String identifier, @NotNull Verification verification, String brinCode) {
        super(email, chosenName, firstName, lastNamePrefix, lastName, dateOfBirth, identifier, verification, brinCode);
        this.eduIDValue = eduIDValue;
    }

    public UpdateExternalEduID(NewExternalEduID externalEduID, String newEduIDValue) {
        super( externalEduID.getEmail(),
                externalEduID.getChosenName(),
                externalEduID.getFirstName(),
                externalEduID.getLastNamePrefix(),
                externalEduID.getLastName(),
                externalEduID.getDateOfBirth(),
                externalEduID.getIdentifier(),
                externalEduID.getVerification(),
                externalEduID.getBrinCode());
        this.eduIDValue = newEduIDValue;
    }

}
