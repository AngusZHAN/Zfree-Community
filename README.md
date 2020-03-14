## Zfree社区

## 资料  
[Spring文档](https://spring.io/guides)  
[Spring Web文档](https://spring.io/guides/gs/serving-web-content/)  
[es社区](https://elasticsearch.cn/explore)  
[Github deploy key](https://developer.github.com/v3/guides/manage-deploy-keys/#deploy-keys)  
[Bootstrap](https://v3.bootcss.com/getting-started/)  
[Github OAuth](https://developer.github.com/apps/building-github-apps/creating-a-github-app/)  
[Spring](https://docs.spring.io/spring-boot/docs/2.0.0.RC1/reference/htmlsingle/#boot-features-embedded-database-support)  
[Thymeleaf](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html)  
[Spring MVC](https://docs.spring.io/spring/docs/5.1.0.RELEASE/spring-framework-reference/web.html#spring-web)

## 工具  
[Git](https://git-scm.com/downloadgit)  
[Visual Paradigm](https://www.visual-paradigm.com)  
[Lombok](https://projectlombok.org/)  
[Postman](https://chrome.google.com/webstore/detail/coohjcphdfgbiolnekdpbcijmhambjff)  
[Editor.md](https://pandao.github.io/editor.md/)

## 脚本
```sql
CREATE TABLE USER
(
    ID int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    ACCOUNT_ID VARCHAR(100),
    NAME VARCHAR(50),
    TOKEN CHAR(36),
    GMT_CREATE BIGINT,
    GMT_MODIFIED BIGINT
);
```
```bash
mvn -Dmybatis.generator.overwrite=true mybatis-generator:generate
```