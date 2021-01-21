    
  


    
CREATE TABLE IF NOT EXISTS 

    articles (

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        name VARCHAR(50) NOT NULL,

     

        FOREIGN KEY (authorId) REFERENCES authors
        
      
      

    );

CREATE TABLE IF NOT EXISTS 

    authors (

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        name VARCHAR (50) NOT NULL,

        lastName VARCHAR(50) NOT NULL,
        articleId INTEGER NOT NULL,

        FOREIGN KEY (articleId) REFERENCES articles
    );



CREATE TABLE IF NOT EXISTS

    article_authors(

         id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        articleId INTEGER NOT NULL,

        authorId INTEGER NOT NULL,

        FOREIGN KEY (articleId) REFERENCES articles,

        FOREIGN KEY (authorId) REFERENCES authors
    );
    


        


