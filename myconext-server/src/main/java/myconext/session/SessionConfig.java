package myconext.session;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import myconext.model.EduID;
import myconext.model.LinkedAccount;
import myconext.model.PublicKeyCredentials;
import myconext.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.jackson2.CoreJackson2Module;
import org.springframework.session.data.mongo.JacksonMongoSessionConverter;
import org.springframework.session.data.mongo.config.annotation.web.http.EnableMongoHttpSession;
import org.springframework.session.web.context.AbstractHttpSessionApplicationInitializer;
import org.springframework.session.web.http.CookieSerializer;
import org.springframework.session.web.http.DefaultCookieSerializer;

import java.util.*;

@Configuration
@EnableMongoHttpSession
public class SessionConfig extends AbstractHttpSessionApplicationInitializer {

    @Bean(name = "jsonMapper")
    @Primary
    public ObjectMapper jsonMapper() {
        return new ObjectMapper()
                .configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false)
                .setSerializationInclusion(JsonInclude.Include.NON_ABSENT)
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .registerModule(new Jdk8Module());
    }

    @Bean
    CookieSerializer cookieSerializer(@Value("${secure_cookie}") boolean secureCookie) {
        DefaultCookieSerializer defaultCookieSerializer = new DefaultCookieSerializer();
        defaultCookieSerializer.setSameSite("None");
        defaultCookieSerializer.setUseSecureCookie(secureCookie);
        return defaultCookieSerializer;
    }

    @Bean
    JacksonMongoSessionConverter mongoSessionConverter() {
        SimpleModule module = new CoreJackson2Module() {
            @Override
            public void setupModule(SetupContext context) {
                super.setupModule(context);
                context.setMixInAnnotations(HashSet.class, HashSetMixin.class);
                context.setMixInAnnotations(User.class, UserMixin.class);
                context.setMixInAnnotations(LinkedAccount.class, LinkedAccountMixin.class);
                context.setMixInAnnotations(EduID.class, EduIDMixin.class);
                context.setMixInAnnotations(PublicKeyCredentials.class, PublicKeyCredentialsMixin.class);
                context.setMixInAnnotations(LinkedHashMap.class, LinkedHashMapMixin.class);
                context.setMixInAnnotations(HashMap.class, HashMapMixin.class);
            }
        };

        List<Module> modules = new ArrayList<>();
        modules.add(module);

        return new JacksonMongoSessionConverter(modules);
    }

    private static class HashSetMixin {
    }

    private static class UserMixin {
    }

    private static class LinkedAccountMixin {
    }

    private static class EduIDMixin {
    }

    private static class PublicKeyCredentialsMixin {
    }

    private static class LinkedHashMapMixin {
    }

    private static class HashMapMixin {
    }
}
