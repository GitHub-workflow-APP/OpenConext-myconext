import I18n from "i18n-js";

I18n.translations.nl = {
    sidebar: {
        home: "Home",
        personalInfo: "Persoonlijke info",
        dataActivity: "Data & activiteit",
        security: "Beveiliging",
        account: "Account"
    },
    start: {
        hi: "Hi {{name}}!",
        manage: "Beheer je persoonlijke informatie, je privacy, en de beveiliging van je eduID account.",
        app: {
            title: "Studeer je in NL? Koppel je instelling!",
            infoBold: "Als je studeert in Nederland ",
            infoPart: "en je wilt eduID gebruiken om in te loggen op onderwijsdiensten, dan willen we zekerheid over je identiteit.",
            requirements: "Daarvoor kan je de volgende informatie toevoegen aan de eduID account",
            validatedName: "Validatie van je volledige naam bij een instelling",
            proofStudent: "Bewijs dat je een student bent",
            institution: "Je huidige instelling",
            connect: "Koppel je onderwijsinstelling"
        }
    },
    header: {
        title: "eduID",
        logout: "Uitloggen"
    },
    landing: {
        logoutTitle: "Je bent uitgelogd",
        logoutStatus: "Om het uitlogproces te voltooien, moet je de browser nu afsluiten.",
        loginAgain: "Opnieuw inloggen",
        deleteTitle: "Jouw eduID is verwijderd",
        deleteStatus: "Om het verwijderen van je eduID te voltooien, moet je jouw browser nu afsluiten.",
        registerAgain: "Opnieuw registreren"
    },
    notFound: {
        title: "Oeps...",
        title2: "Er is iets fout gegaan (404)."
    },
    profile: {
        title: "Persoonlijke informatie",
        info: "Wanneer je eduID gebruikt om in te loggen op andere websites, kan jouw persoonlijke informatie worden gedeeld.",
        verifiedInformation: "Je geverifïeerde informatie",
        verifiedInformationInfo: "Dit is een overzicht van de geverifïeerde informatie die we hebben ontvangen van betrouwbare bronnen.",
        defaultPreferred: "Dit icon geeft aan dat deze informatie default wordt gebruikt voor 'je persoonlijke informatie'.",
        receivedOn: "op <strong>{{date}}</strong>",
        receivedOnInfo: "Ontvangen op <strong>{{date}}</strong>",
        validUntilDate: "Geldig tot <strong>{{date}}</strong>",
        validUntilDateInfo: "Geldig tot <strong>{{date}}</strong>",
        removeLinkPrefix: "Verwijder deze informatie",
        removeLinkPostfix: " uit je eduID",
        banner: "Sommige diensten vereisen dat je persoonlijke gegevens worden gevalideerd door een vertrouwde partij.",
        expiredBanner: "De verificatie van je identiteit is verlopen, verifïeer deze opnieuw.",
        verifyNow: "Verifïeer nu",
        basic: "Basis informatie",
        contact: "Contact informatie",
        role: "Rol & instelling",
        email: "E-mail",
        name: "Naam",
        chosenName: "Roepnaam",
        givenName: "Voornaam",
        validatedGivenName: "Geverifïeerde voornaam",
        familyName: "Achternaam",
        validatedFamilyName: "Geverifïeerde achternaam",
        validatedDayOfBirth: "Geverifïeerde geboortedatum",
        linkedAccounts: "Je rollen",
        addInstitution: "Voeg een rol toe",
        addIdentity: "Voeg een identiteit toe",
        proceedConext: "Voeg dit toe via SURFconext",
        proceedVerify: "Voeg dit toe via SURFconext of een andere Identity Provider",
        validated: "Gevalideerde informatie",
        firstAndLastName: "Voor- en achternaam",
        firstAndLastNameInfo: "Jouw voor- en achternaam zijn nog niet geverifieerd door een derde partij.",
        verify: "Verifïeer",
        student: "Bewijs van studeren",
        studentInfo: "Je hebt nog niet bewezen dat je in Nederland een studie volgt.",
        prove: "Bewijs",
        trusted: "Koppeling met vertrouwde partij",
        trustedInfo: "Je eduID account is nog niet gekoppeld aan een vertrouwde partij.",
        link: "Koppel",
        institution: "Instelling",
        affiliations: "Betrekking(en)",
        expires: "Koppeling verloopt",
        expiresValue: "{{date}}",
        verifiedAt: "Geverifieerd door <strong>{{name}}</strong> op {{date}}",
        proceed: "Doorgaan",
        verified: "Geverifiëerd",
        notVerified: "Niet geverifiëerd",
        editable: "Bewerkbaar door jou",
        nonEditable: "Geverifiëerd door {{name}}",
        verifiedBy: "Geverifiëerd door {{name}}",
        validUntil: "Geldig tot",
        from: "Van {{name}}",
        verifyFirstAndLastName: {
            addInstitution: "Instelling toevoegen",
            addInstitutionConfirmation: "Als je doorgaat word je gevraagd in te loggen via de onderwijsinstelling die je wilt koppelen. Selecteer eerst welke instelling je wilt koppelen en log daarna in.<br/> <br/>Nadat je succesvol bent ingelogd kom je hier weer terug.",
        },
        remove: "Verwijder",
        atInstitution: "Bij {{name}}",
        studentRole: "Student",
        preferInstitution: "Voorkeursinstelling",
        preferredInstitutionInfo: "Wil je de volgende informatie, gebruiken als standaardinformatie om met diensten te delen?",
        preferred: "{{name}} is nu de bron van je persoonsinformatie",
        expired: "Verlopen",
        newInstitutionTitle: "is met succes gekoppeld",
        newInstitutionInfo: "De volgende informatie is toegevoegd aan je eduID account en kan nu worden gedeeld.",
        ok: "Ga door",
        yes: "Ja, graag",
        no: "Nee, bedankt",
        eppn: "EPPN",
        subjectId: "Subject ID",
        manageInformation: "Manage je geverifïeerde informatie",
        noValidInformation: "{{name}} heeft geen valide informatie opgeleverd"
    },
    eppnAlreadyLinked: {
        header: "Koppeling niet gemaakt!",
        info: "Je eduID kon niet worden gekoppeld. Het vertrouwde account waarmee je zojuist bent ingelogd, is al aan een ander eduID-account gekoppeld: {{email}}.",
        infoNew: "Je kan geen eduID account aanvragen met het vertrouwde account waarmee je zojuist bent ingelogd. Dit instellings-account is al gekoppeld met aan een ander eduID account: {{email}}.",
        retryLink: "Opnieuw proberen"
    },
    edit: {
        title: "Aanpassen profielgegevens",
        info: "Voer je volledige naam in.",
        givenName: "Je voornaam",
        familyName: "Je achternaam",
        update: "Bijwerken",
        cancel: "Annuleren",
        save: "Bewaar",
        updated: "Je profiel is bijgewerkt.",
        back: "/profile",
        and: " en "
    },
    email: {
        title: "E-mail",
        info: "Voer je nieuwe e-mailadres in. Er wordt een verificatiemail naar dit adres gestuurd.",
        email: "Je nieuwe e-mail",
        update: "Verstuur",
        cancel: "Annuleer",
        updated: "Een verificatiemail is verzonden naar {{email}}",
        confirmed: "Je e-mail is gewijzigd naar {{email}}",
        back: "/personal",
        emailEquality: "Je nieuwe e-mailadres is gelijk aan je huidige e-mailadres",
        duplicateEmail: "Dit e-mailadres is al in gebruik.",
        outstandingPasswordForgotten: "Uitstaand reset verzoek voor wachtwoord",
        outstandingPasswordForgottenConfirmation: "Je hebt een openstaand wachtwoord vergeten link. Deze link is niet langer geldig als je deze e-mailwijziging bevestigt."
    },
    security: {
        title: "Beveiliging",
        subTitle: "We bieden verschillende methoden om in te loggen met je eduID.",
        secondSubTitle: "Andere loginmethoden",
        usePassword: "Wachtwoord",
        usePublicKey: "Beveiligingssleutel",
        notSet: "Niet ingesteld",
        notSupported: "Niet ondersteund",
        useMagicLink: "Stuur magische link naar",
        rememberMe: "Ingelogd blijven",
        securityKey: "Beveiligingssleutel {{nbr}}",
        test: "Test",
        addSecurityKey: "Beveiligingssleutel toevoegen",
        addSecurityKeyInfo: "Je kunt een beveiligingssleutel toevoegen aan je eduID account waarmee je kunt inloggen. Dit kan bijv. de ingebouwde sensor van je apparaat zijn (TouchID, FaceID) of een los hardwaretoken (YubiKey).",
        settings: "Instellingen voor inloggen",
        rememberMeInfo: "<strong> Dit apparaat wordt momenteel onthouden. Je wordt automatisch ingelogd op eduD </strong>",
        noRememberMeInfo: "Als je inlogt met eduID kun je ervoor kiezen om <strong>ingelogd te blijven</strong>. Dan wordt jouw login op het apparaat dat je op dat moment gebruikt onthouden.",
        forgetMe: "Vergeet dit apparaat",
        tiqr: {
            title: "Wil je de volgende keer sneller en veiliger inloggen?",
            info: "Download de <strong>eduID app</strong> en log veilig in zonder wachtwoord of toegang tot je e-mail.",
            fetch: "Nu installeren",
            deactivate: "Deactiveren",
            app: "eduID app",
            backupCodes: "Herstelmethode",
            phoneId: "Telefoon ID",
            APNS: "iPhone",
            APNS_DIRECT: "iPhone",
            FCM: "Android",
            GCM: "Android",
            FCM_DIRECT: "Android",
            appCode: "App code",
            lastLogin: "Laatste login",
            activated: "Geactiveerd op",
            dateTimeOn: "om",
            backupMethod: "Herstelmethode",
            sms: "SMS",
            code: "Herstelcode"
        }
    },
    home: {
        home: "Home",
        welcome: "Welkom {{name}}",
        "data-activity": "Data & activiteit",
        personal: "Persoonlijke info",
        security: "Beveiliging",
        account: "Account",
        institutions: "Koppelingen",
        services: "Diensten",
        favorites: "Favorieten",
        settings: "Instellingen",
        links: {
            teams: "Teams",
            teamsHref: "https://teams.{{baseDomain}}",
        }
    },
    account: {
        title: "Je eduID account",
        titleDelete: "Verwijder je eduID account",
        info: "Op deze pagina kun je je account beheren.",
        created: "Aangemaakt op",
        delete: "Verwijder mijn account",
        cancel: "Annuleer",
        deleteInfo: "Ga voorzichtig te werk, want je verliest de unieke eduID ID's die momenteel aan je e-mailadres zijn gekoppeld.",
        data: "Download je data",
        downloadData: "Download",
        downloadDataConfirmation: "De download van je persoonlijke gegevens van je eduID-account bevat alle informatie die we over je  hebben. Het bevat ook technische sleutels en referenties.",
        personalInfo: "Klik op de onderstaande knop om al je persoonlijke gegevens uit je eduID account te downloaden.",
        deleteTitle: "Je eduID account verwijderen",
        info1: "Je kunt je eduID account verwijderen wanneer je maar wilt.",
        info2: "Let op, je verliest de unieke eduID nummers die aan je e-mailadres zijn gekoppeld. Wanneer je je opnieuw registreert voor eduID met hetzelfde e-mailadres, krijg je een nieuwe eduID nummers. Sommige diensten gebruiken deze nummers om je uniek te identificeren, dus voor die diensten word je dan gezien als een nieuwe gebruiker. ",
        info3: "Houd er rekening mee dat het verwijderen van je eduID niet betekent dat alle diensten die je met je eduID hebt gebruikt, ook je gegevens zullen verwijderen.",
        info4: "Om het verwijderen van je eduID volledig te voltooien, moet je nadat je account is verwijderd je browser afsluiten.",
        deleteAccount: "Verwijder mijn eduID",
        deleteAccountConfirmation: "Weet je zeker dat je je eduID wilt verwijderen?",
        deleteAccountSure: "Je account voor alle eeuwigheid verwijderen?",
        deleteAccountWarning: "Er is geen manier om deze actie ongedaan te maken.",
        proceed: "Als je wilt doorgaan, typ dan je volledige naam zoals bekend in je eduID account ter bevestiging.",
        name: "Volledige naam",
        namePlaceholder: "Je volledige naam zoals gebruikt in je profiel"
    },
    dataActivity: {
        title: "Gebruikte diensten",
        info: "Elke dienst waarvoor je eduID gebruikt ontvangt bepaalde gegevens (attributen) vanuit jouw eduID account. Denk hierbij aan je naam, e-mailadres of aan een pseudoniem waarmee de dienst jou uniek kan identificeren.",
        explanation: "Diensten waarop je bent ingelogd via eduID.",
        noServices: "Je bent nog niet ingelogd geweest op een dienst via eduID.",
        name: "Naam",
        add: "Nieuwe instelling koppelen",
        access: "Heeft toegang tot je data",
        details: {
            login: "Logingegevens",
            delete: "Verwijder logingegevens",
            first: "Eerste login",
            eduID: "Uniek eduID nummer",
            homePage: "Home pagina",
            deleteDisclaimer: "Als je deze logingegevens verwijdert, verwijdert eduID deze informatie uit je eduID account. Je hebt nog een account bij de dienst zelf. Als je dat wilt laten verwijderen, doe dat dan rechtstreeks bij de dienst.",
            access: "Toegangsrechten",
            details: "Accountgegevens",
            consent: "Datum toestemming",
            expires: "Vervaldatum",
            revoke: "Intrekken"
        },
        deleteService: "Verwijder dienst",
        deleteServiceConfirmation: "Weet je zeker dat je het unieke gepseudonimiseerde eduID voor {{name}} wilt verwijderen? <br/> <br/> Deze dienst herkent je wellicht niet meer de volgende keer dat je inlogt en je persoonlijke gegevens bij deze dienst zijn daardoor mogelijk niet meer toegankelijk.",
        deleteTokenConfirmation: "Weet je zeker dat de API access beveiligingssleutel voor {{name}} wilt intrekken?",
        deleteToken: "Beveiligingssleutel intrekken",
        deleted: "eduID verwijderd",
        tokenDeleted: "Beveiligingssleutels verwijderd"
    },
    institution: {
        title: "Gekoppelde instelling",
        info: "Deze instelling is op {{date}} om {{hours}}: {{minutes}} gekoppeld aan jouw eduID.",
        name: "Naam van de instelling",
        eppn: "Identifier bij de instelling",
        displayName: "Weergavenaam",
        affiliations: "Betrekking(en) bij de instelling",
        expires: "Koppeling verloopt op",
        expiresValue: "{{date}}",
        delete: "Verwijder koppeling",
        cancel: "Annuleren",
        deleted: "De informatie ontvangen van {{name}} is verwijderd",
        back: "/instellingen",
        deleteInstitution: "Verwijder deze informatie",
        deleteInstitutionConfirmation: "Voor sommige applicaties waarop je wilt inloggen met eduID zijn gevalideerde gegevens nodig. Als je deze gegevens verwijdert, kan je je niet meer aanmelden bij deze toepassingen.<br/><br/>Mogelijk wordt je gevraagd om je gegevens opnieuw te valideren als je er inlogt."
    },
    credential: {
        title: "Bewerk beveiligingssleutel",
        info: "Je hebt deze key toegevoegd op {{date}} om {{hours}}: {{minutes}}",
        name: "Naam",
        cancel: "Annuleren",
        update: "Bewaar",
        deleted: "Je key {{name}} is verwijderd",
        updated: "Je key {{name}} is bewaard",
        back: "/weauthn",
        deleteCredential: "Verwijder sleutel",
        deleteCredentialConfirmation: "Weet je zeker dat je de beveiligingssleutel {{name}} wilt verwijderen? De beveiligingssleutel wordt verwijderd uit je eduID account, maar wordt niet verwijderd uit je browser en / of van je YubiKey-apparaat."
    },
    password: {
        addTitle: "Toevoegen wachtwoord",
        updateTitle: "Wijzig wachtwoord",
        addInfo: "Als je een wachtwoord aan je eduID-account wilt toevoegen, klik dan hieronder op <strong>Bevestigen</strong> om direct een e-mail te ontvangen met een link om een wachtwoord toe te voegen.",
        updateInfo: "Als je het wachtwoord van je eduID-account wilt resetten of verwijderen, druk hieronder op <strong>Bevestigen</strong> om direct een e-mail te ontvangen met een link om je huidige wachtwoord opnieuw in te stellen of te verwijderen.\n",
        resetTitle: "Stel je wachtwoord opnieuw in",
        newPassword: "Nieuw wachtwoord",
        confirmPassword: "Bevestig nieuw wachtwoord",
        setUpdate: "Wachtwoord instellen",
        updateUpdate: "Opslaan",
        cancel: "Annuleren",
        set: "Je wachtwoord is ingesteld",
        reset: "Je wachtwoord is opnieuw ingesteld",
        deleted: "Je wachtwoord is verwijderd",
        deletePassword: "Verwijder wachtwoord",
        deletePasswordConfirmation: "Weet je zeker dat je je wachtwoord wilt verwijderen? Het is hierna niet meer mogelijk om in te loggen met dit wachtwoord.",
        updated: "Je wachtwoord is aangepast",
        back: "/security",
        passwordDisclaimer: "Kies een wachtwoord van tenminste 8 karakters lang met minimaal een hoofdletter en een cijfer. Een langer wachtwoord van minimaal 15 karakters mag ook.",
        invalidCurrentPassword: "Je huidige wachtwoord is niet correct.",
        passwordResetHashExpired: "De link om je wachtwoord opnieuw in te stellen is verlopen. ",
        forgotPassword: "Help! Ik ben mijn huidige wachtwoord vergeten",
        passwordResetSendAgain: "Stuur een e-mail om mijn wachtwoord opnieuw in te stellen.",
        forgotPasswordConfirmation: "Wachtwoord vergeten? Druk hieronder op 'Bevestigen' om direct een e-mail te ontvangen waarmee je je huidige wachtwoord opnieuw kunt instellen.",
        outstandingEmailReset: "Openstaand wijzigingsverzoek voor e-mail",
        outstandingEmailResetConfirmation: "Je hebt een openstaande bevestigingslink voor een nieuwe e-mail. Deze link is niet langer geldig als je dit verzoek voor een vergeten wachtwoord bevestigt.",
        flash: {
            passwordLink: "Een e-mail is verstuurd naar {{name}} om je wachtwoord opnieuw in te stellen."
        }

    },
    webauthn: {
        setTitle: "Beveiligingssleutel toevoegen",
        updateTitle: "Beveiligingssleutel toevoegen",
        publicKeys: "Je publieke keys",
        noPublicKeys: "Je hebt nog geen keys toegevoegd.",
        nameRequired: "Voordat je een beveiligingssleutel kan toevoegen, moet je deze eerst een naam geven.",
        revoke: "Intrekken",
        addDevice: "Voeg dit apparaat toe",
        info: "Een beveiligingssleutel is een los of ingebouwd apparaat dat strikt persoonlijk van jou is, waarmee je kunt bewijzen dat jij de rechtmatige gebruiker van je eduID-account bent. Nadat je een beveiligingssleutel hebt toegevoegd aan je eduID-account kun je deze gebruiken om mee in te loggen, naast een magische link of wachtwoord.",
        back: "/security",
        setUpdate: "Start",
        updateUpdate: "Voeg deze beveiligingssleutel toe",
        credentialName: "Naam van beveiligingssleutel",
        credentialNamePlaceholder: "bijv. mijn gele Yubikey",
        test: "Test",
        testInfo: "Druk op de <strong>test</strong>knop om een 1 van je beveiligingssleutels te testen. Je wordt doorgestuurd naar het eduID loginscherm.",
        testFlash: "Je hebt met succes de beveligingssleutel getest voor inloggen."
    },
    rememberMe: {
        updated: "Dit apparaat wordt niet langer onthouden",
        forgetMeTitle: "Onthoud dit apparaat",
        info: "Dit apparaat wordt onthouden. Je bent hierdoor automatisch ingelogd met eduID.",
        cancel: "Annuleren",
        update: "Vergeet dit apparaat",
        forgetMeConfirmation: "Weet je zeker dat je dit apparaat niet langer wilt onthouden?",
        forgetMe: "Vergeet dit apparaat"
    },
    footer: {
        privacy: "Privacybeleid",
        terms: "Voorwaarden",
        help: "Help",
        poweredBy: "Aangeboden door"
    },
    modal: {
        cancel: "Annuleren",
        confirm: "Bevestigen"
    },
    format: {
        creationDate: "{{date}} om {{hours}}:{{minutes}}"
    },
    getApp: {
        header: "Download de eduID app",
        info: "Download en installeer <a href=\"https://eduid.nl/help\" target=\"_blank\">de eduID app</a> (uitgegeven door SURF) op je mobiele apparaat.",
        google: "https://play.google.com/apps/testing/nl.eduid",
        apple: "https://testflight.apple.com/join/Ogk1TxKu",
        after: "Als je de eduID app op je telefoon hebt gedownload, kom dan hier terug en klik op volgende.",
        back: "Terug",
        next: "Volgende"
    },
    sms: {
        header: "Controleer je telefoon",
        info: "Voer de zescijferige code in die we naar je telefoon hebben gestuurd om door te gaan.",
        codeIncorrect: "De code is onjuist",
        maxAttemptsPre: "Maximum aantal pogingen bereikt. Klik",
        maxAttemptsPost: "om opnieuw je telefoonnummer in te voeren en een nieuwe code te ontvangen",
        maxAttemptsPostNoReEnter: "om een nieuwe code aan te vragen",
        here: " hier "

    },
    enrollApp: {
        header: "Voltooi de installatie in de eduID app",
        scan: "Scan deze QR-code met je eduID app",
        timeOut: "Sessie timeout",
        timeOutInfoFirst: "Je sessie is verlopen. Klik op deze ",
        timeOutInfoLast: " om het opnieuw te proberen.",
        timeOutInfoLink: "link",
        openEduIDApp: "Open de app op dit apparaat",
        existingRegistration: "Bestaande registrate",
        existingRegistrationInfoFirst: "Je kan geen nieuwe registratie starten, omdat je al een registratie hebt. Klik op ",
        existingRegistrationInfoLast: " om de instellingen van je beveiliging opnieuw te laden.",
        existingRegistrationInfoLink: "link",
    },
    recovery: {
        header: "Een herstelmethode instellen",
        changeHeader: "Verander je herstelmethode",
        info: "Als je de eduID app niet meer kunt gebruiken, bijvoorbeeld bij verlies van je mobiele telefoon, kun je met de herstelmethode de eduID app opnieuw registreren.",
        changeInfo: "Je bent succesvol geauthenticeerd met je eduID app. Je kan nu je herstelmethode voor de eduID app veranderen. LET OP: je huidige herstelmethode komt te vervallen.",
        methods: "De volgende methoden zijn beschikbaar.",
        phoneNumber: "Register hersteltelefoonnummer.",
        phoneNumberInfo: "Je ontvangt een SMS met een verificatiecode.",
        backupCode: "Registreer herstelcode.",
        backupCodeInfo: "Bewaar deze code op een veilige plek.",
        save: "Bewaar de code ergens veilig.",
        active: "Deze code is nu actief en je eduID app is klaar om te gebruiken.",
        copy: "Kopieer de code",
        copied: "Gekopieerd",
        continue: "Mijn code is veilig. Doorgaan",
        leaveConfirmation: "Weet je zeker dat je deze pagina wilt verlaten? Wijzigingen worden niet opgeslagen."
    },
    phoneVerification: {
        header: "Voeg een hersteltelefoonnummer toe",
        info: "Je telefoonnummer wordt gebruikt om weer toegang te krijgen tot je account als je de app ooit kwijtraakt.",
        text: "We sturen je een code om je nummer te verifiëren.",
        verify: "Verifieer dit telefoonnummer",
        placeHolder: "+31 612345678",
        phoneIncorrect: "Verificatiecode is onjuist"
    },
    congrats: {
        header: "Succes",
        info: "Je kunt nu de eduID app gebruiken om snel in te loggen bij diensten die eduID gebruiken.",
        changeInfo: "Je hebt je herstelmethode veranderd.",
        next: "Terug naar instellingen"
    },
    deactivate: {
        titleDelete: "Deactiveer je eduID app",
        info: "Je kunt je eduID app deactiveren als je de app opnieuw wilt installeren of als je een nieuw apparaat hebt.",
        recoveryCode: "Herstelcode",
        recoveryCodeInfo: "Vul de <strong>herstelcode</strong> in die je tijdens de eduID app registratie hebt bewaard.",
        verificationCode: "SMS verificatiecode",
        codeIncorrect: "Verkeerde verificatiecode",
        next: "Volgende",
        deactivateApp: "Deactiveer",
        sendSms: "Druk op volgende om een SMS met een verificatiecode naar je geregistreerde telefoonnummer te sturen.",
        maxAttempts: "Maximum aantal pogingen bereikt. Neem contact op met <a href=\"mailto:help@eduid.nl\">help@eduid.nl</a> voor hulp."
    },
    backupCodes: {
        title: "Herstelmethode",
        info: "Je hebt de eduID app geïnstalleerd en geregistreerd. Om je herstelmethode te wijzigen, moet je je eerst authenticeren met de eduID app.",
        phoneNumber: "Mobiel nummer",
        startTiqrAuthentication: "Wijzig",
        code: "Code"
    },
    useApp: {
        header: "Controleer je eduID app",
        info: "We hebben een pushmelding naar je app gestuurd om te verifiëren dat jij het bent die probeert in te loggen.",
        scan: "Scan deze QR-code met je eduID app",
        noNotification: "Geen melding?",
        qrCodeLink: "Maak een QR-code",
        qrCodePostfix: "en scan deze.",
        offline: "Wanneer je apparaat offline is, moet je een ",
        offlineLink: "eenmalige code invoeren.",
        lost: "Je app verloren?",
        lostLink: "Lees op <a href=\"https://eduid.nl/help\" target=\"_blank\">hoe je een nieuwe moet registreren</a>.",
        timeOut: "Sessie timeout",
        timeOutInfoFirst: "Je sessie is verlopen. Klik op deze ",
        timeOutInfoLast: " om het opnieuw te proberen.",
        timeOutInfoLink: "link",
        responseIncorrect: "De code is niet juist.",
        suspendedResult: "De verficatie van je eduID app is mislukt. ",
        accountNotSuspended: "Je kan het opnieuw proberen.",
        accountSuspended: "Je zal {{minutes}} {{plural}} moeten wachten totdat je het opnieuw kan proberen.",
        minutes: "minuten",
        minute: "minuut"
    },
    createFromInstitution: {
        title: "Maak een eduID van je instelling",
        header: "Je staat op het punt een eduID-account aan te maken dat wordt gekoppeld aan je instellingsaccount.",
        alreadyHaveAnEduID: "Heb je al een eduID-account? <a href=\"{{location}}\">Login!</a>",
        info: "Als je verder gaat, wordt je gevraagd om in te loggen bij de instelling die je aan je eduID wilt koppelen. Na een succesvolle login kom je hier terug.",
        startFlow: "Start registratie",
        welcome: "Je eduID account is aangemaakt",
        welcomeExisting: "Je eduID account is gekoppeld aan de vertrouwde instellingsaccount"
    },
    linkFromInstitution: {
        header: "Hi {{name}}",
        info: "Je bent succesvol ingelogd bij je instelling. Voer nu je persoonlijke email in, dit wordt je eduID email.",
        email: "Je e-mail",
        emailPlaceholder: "e.g. user@gmail.com",
        emailForbidden: "Het aanmaken van een eduID-account met deze email is niet toegestaan, neem contact op met <a href=\"mailto:help@eduid.nl\">help@eduid.nl</a> als je denkt dat het e-maildomein geldig is.",
        emailInUse1: "Dit e-mailadres is al in gebruik.",
        emailInUse2: "Probeer een andere, of ",
        emailInUse3: " koppel met dit eduID account.",
        invalidEmail: "Ongeldig e-mailadres",
        institutionDomainNameWarning: "Het lijkt erop dat je een instellings e-mailadres hebt ingevoerd. Houd er rekening mee dat wanneer je niet meer studeert of werkt bij die instelling, je geen toegang meer hebt tot dat e-mail adres.",
        institutionDomainNameWarning2: "We raden je aan om je persoonlijke e-mailadres te gebruiken voor eduID.",
        allowedDomainNamesError: "Domeinnaam {{domain}} niet toegestaan.",
        allowedDomainNamesError2: "eduID is beperkt om alleen te worden gebruikt door toegestane domeinen.",
        agreeWithTerms: "<span>Ik ga akkoord met <a tabindex='-1' href='https://eduid.nl/gebruiksvoorwaarden/' target='_blank'>de voorwaarden.</a> En ik begrijp <a tabindex='-1' href='https://eduid.nl/privacyverklaring/' target='_blank'>de privacyverklaring</a>.</span>",
        requestEduIdButton: "Vraag je eduID aan",
    },
    pollFromInstitution: {
        header: "Open je mailbox!",
        info: "Om in te loggen, klik op de link in de e-mail die we hebben verstuurd naar <strong>{{email}}</strong>.",
        awaiting: "Wachten tot je op de link klikt...",
        openGMail: "Open Gmail.com",
        openOutlook: "Open Outlook.com",
        spam: "Kan je de e-mail niet vinden? Kijk in je spam.",
        loggedIn: "Inloggen geslaagd!",
        loggedInInfo: "Je kan dit tabblad / venster sluiten.",
        timeOutReached: "Timeout!",
        timeOutReachedInfo: "Je magische link is verlopen. Ga terug naar de dienst waar je heen wou en probeer het opnieuw.",
        resend: "E-mail nog steeds niet gevonden?",
        resendLink: " Stuur de e-mail opnieuw.",
        mailResend: "Check je inbox. We hebben je de e-mail met de magische link opnieuw verzonden.",
    },
    weekDays: {
        0: "Zondag",
        1: "Maandag",
        2: "Dinsdag",
        3: "Woensdag",
        4: "Donderdag",
        5: "Vrijdag",
        6: "Zaterdag"
    },
    verify: {
        modal: {
            header: "Verificatie",
            info: {
                title: "Verificatie",
                verify: "Verifïeer je identiteit, snel en gemakkelijk",
                please: "Verifïeer a.u.b dat je bent wie je zegt dat je bent.",
                educationalInstitution: "Verifïeer met een Nederlandse onderwijsinstelling",
                selectInstitution: "Selecteer je instelling",
                other: "Andere opties...",
                verifyBank: "Verifïeer met een Nederlandse ban app",
                selectBank: "Selecteer je bank",
                verifyEuropeanId: "Verifïeer met een Europses ID",
                supportEuropean: "We ondersteunen de meederhead van de de nationalie digitale ID's",
                useEuropean: "gebruik een Europese ID",
                help: "Als je geen van deze opties kan gebruiken, bezoek dan onze <a href='https://eduid.nl/help' target='_blank' rel='noreferrer'>support pagina's</a>"
            },
            bank: {
                select: "Selecteer je bank",
                disclaimer: "Met iDIN controleren we via de bank de persoonlijke informatie, om ervan zeker te zijn wie je bent. " +
                    "<strong>Je maakt geen geld over</strong>. <a href='https://www.idin.nl/' target='_blank' rel='noreferrer'>Meer over iDIN.</a>",
                anotherMethodPrefix: "Als je eigen bank niet in de lijst staat, selecteer dan ",
                anotherMethodPostfix: "een andere methode"
            }
        }
    }
};