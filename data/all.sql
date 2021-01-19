    
  


    
CREATE TABLE IF NOT EXISTS 

    articles (

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        name VARCHAR(50) NOT NULL,

        description VARCHAR(50) NOT NULL,

        price  INTEGER NOT NULL

      
      

    );

CREATE TABLE IF NOT EXISTS 

    authors (

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        name VARCHAR (50) NOT NULL,

        lastName VARCHAR(50) NOT NULL,
        articleId INTEGER NOT NULL,

        FOREIGN KEY (articleId) REFERENCES articles
    );
    


        


