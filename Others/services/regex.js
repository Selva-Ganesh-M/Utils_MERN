  format "//g"

    -- a regular expression has to be written inside "//" 2 slashes.
    -- Regular expressions contain a series of characters that define a pattern of text to be matched—to make a filter more specialized, or general.
    -- g in the regex above shows that the global filter is applied.
    -- website to playaround with regex -- " https://regexr.com/ "


    1. Normal  :: Regex = " /a/g "

      -- shows us all the "a" in the text paragraph.
      eg. "R|a|mesh kum|a|r"
     




    2. manual consecutive  ::  Regex = " /aa/g "

      -- shows us all the 2 consecutive "aa" in the text paragraph.
      eg. "aa", "r|aa|vanan"




    3. same consecutive(+)  ::   Regex = " /a+/g "

      -- any number of consective "a" is matched. 
      -- atleast one "a" is matched.
      eg. "aaaaaaa", "aa", "a"





    4. Optional(?)  ::   Regex = " /a?s/g "

      -- "a" is optional, Howover, "s" is must
      eg. "s", "as", "aaaaa|as|"




    5. Optional & Consecutive(* = (+) + (?) )  ::   Regex = " /a*s/g "

     -- "a" is optional, However if present consecutive values is allowed 
     -- "s" is must
     eg. "s", "as", "aas"
      


    6. Word selector section  ````````````````````````````````````````````````````````````````````````````````````````````````````


    6.1 Every (Alphanumeric and "_" ) character("\w")  ::   Regex = " /\w/g "

     -- selects every alphabets.
     eg. "|s|e|l|v|a|", 
     -- selects every numbers.
     eg. "|s|e|l|v|a|2|3|"
     -- selects every underscore.
     eg. "|s|e|l|v|a|2|3|_|"



    6.2 Selects every ( non-alphanumeric and non-underscore ) characters  ::  Regex = " /\W/g "


    
    6.3 Limiting characters (/\w{1,2}/)
    
 
          6.3.1 fixed ::  Regex = "/\w{4}/g"
                
                -- selects consecutive 4 characters.
                -- must have 4 characters.
                eg. "|selv||agen|shM', "|down||down|"



          6.3.1 min value ::  Regex = "/\w{4,}/g"
                
                -- selects consecutive minimum 4 characters.
                -- must always be >= 4 characters.
                eg. "|selvagenshM|", "|downdown|", "gen |genos| "



          6.3.1 range ::  Regex = "/\w{4,6}/g"
                
                -- selects consecutive characters with max length 6 and min length 4.
                -- must have 4 characters.
                eg. "|deeeee||tails|", "Share"


    6.3E word selector section ends ``````````````````````````````````````````````````````````````````````````````````````````````````````


    7.1. Every white spaces  ::   Regex = " /\s/g "

     eg. "selva| |ganesh| |m"


    7.2. Everything except ( white spaces )  ::   Regex = " /\S/g "

     eg. "|s|e|l|v|a|    |g|a|n|e|s|h|    |m|"



    8. Character grouping  ````````````````````````````````````````````````````````````````````````````````````````````````````
    
    
        8.1 Can be any character in the given characters  ::  Regex = "/[ad]s/g"
        
          -- First letter can be "a" or "d".
          eg. "aaaa|as|", "despera|ds|"
          
        
    
        8.2 Can be any character between (a - z) ::  Regex = "/[a-z]s/g"
        
          -- First letter can be any lowercase alphabet
          eg. "aaaa|as|", "d|es|pera|ds|"
    
    
        8.3 Can be any character between  (a - f)  ::  Regex = "/[a-f]s/g"
        
          -- First letter can be any lowercase alphabet
          eg. "aaaazs", "d|es|pera|ds|"    
    
    
        8.4 Can be any character between  (a-z || A - Z) ::  Regex = "/[a-zA-Z]s/g"
        
          -- First letter can be any alphabet
          eg. "aaaa|as|", "d|es|pera|ds|", Al|as|a, "|As| it rai|ns|"
    
    
        8.5 Can be any character between  (a-z || A - Z) ::  Regex = "/[a-zA-Z0-9]s/g"
        
          -- First letter can be any alphanumeric
          eg. "aaaa|as|", "d|es|pera|ds|", Al|as|a, "|As| it rai|ns|", "abx|9s|"
    
    
    
    
    8E Character grouping  ```````````````````````````````````````````````````````````````````````````````````````````````````


    9. Character "OR"ing  `````````````````````````````````````````````````````````````````````````````````````````````````````
    

        9.1 Check OR condition  ::  Regex = "/t|the/g" 
        
            -- fires if "t" or "the".
            eg. "|the|", "|t|"    
    
        9.2 Check OR condition  ::  Regex = "/(t|T)he/g" 
        
            -- fires if "t" or "T" is before "he".
            eg. "|The|", "|the|"
    
        9.3 Check OR condition within length range ::  Regex = "/(t|e|r){2, 3}/g" 
    
            -- fires if 2-3 character string containing the characters present in the character grouping.
            eg. "c|re|a|te|d", "d|eee||eet|ails", "s|tre||et|"


            9.3.1 updated for better understaning ::  Regex = "/(t|e|r){2,3}\./g"

                -- must have . (period) at the very end after the ranged character grouping.
                eg. "gskinn|er.|com."


    9E. Character "OR"ing  ````````````````````````````````````````````````````````````````````````````````````````````````````


    
    10. grouped range selectors ````````````````````````````````````````````````````````````````````````````````````````````````
    
          Normal(ungrouped)  ::  Regex = "/e{2,3}/g"
             eg. "ch|ee|se"


          10.1 Range selectors ignore values all the preceding if not grouped, except the adjascent value ::  Regex = "/ae{2,3}/g"            
            
              -- range filter only gets applied to "e", cause "a" is not grouped with "e" as "ae".
              eg. chaaa|aee|se.
              
              
          10.2 grouped ranged selector  ::  Regex = "/(ae){2,3}/g"
              
              -- "ae" is considered as a single value and it can occur consecutively 2 to 3 times.
              eg. "|aeaeae|ae", "|aeaeae||aeae|"


    10E ```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
    
    
    11. " End & Beginning " of the " overall & line split" string ````````````````````````````````````````````````````````````
    
    
    
        15.1  multiline flag off  ::  Regex = "//g"
        
            -- matches with the very beggining of the entire document        
        
            15.1.1  Start - "Caret (^)"      
                  
                  eg. Regex = "/^T/g"
                  |T|he fat cat run down the street.
                  It was searching for a mouse to eat.
                  

                  eg. Regex = "/^The/g"
                  |The| fat cat run down the street.
                  It was searching for a mouse to eat.                  
        


            15.1.1  End - "Dollor ($)"      
                  
                  eg. Regex = "/\.$/g"
                  |T|he fat cat run down the street.
                  It was searching for a mouse to eat|.|                

        
        15.2  multiline flag off  ::  Regex = "//gm"
        
            -- matches with the beggining of every line.        
        
            15.1.1  Start - "Caret (^)"      
                  
                  eg. Regex = "/^[TI]/g"
                  |T|he fat cat run down the street. The name is Ian.
                  |I|t was searching for a mouse to eat.
                  

                  eg. Regex = "/^The/g"
                  |The| fat cat run down the street.
                  It was searching for a mouse to eat.                  
                  |The| man is awesome.
        


            15.1.1  End - "Dollor ($)"      
                  
                  eg. Regex = "/\.$/g"
                  |T|he fat cat run down the street. The man of the match|.|
                  It was searching for a mouse to eat|.|    
    
    
    
    11E ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
