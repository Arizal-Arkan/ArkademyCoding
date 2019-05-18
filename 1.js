function biodata ()
{
  var obj = {
    			name : "Arizal Arkan", 
    			adress : "Wonosobo, Jawa Tengah",
    			hobbies : ["Game", "Martial Art", "IT Geeks"],
    			is_married : false,
    			school : { highSchool : "SMK NEGERI 1 WONOSOBO", university : "",},
    			skills : [{name : "Taekwondo", score : "Blue Belt"}, {name : "JavaScript Coding", score : "beginner",}],
    	    };
  		return JSON.stringify(obj);
}
//contoh pemanggilan
biodata();
