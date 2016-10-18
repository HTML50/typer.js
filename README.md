# Typer.js

## Typer.js is a light-weight (1.5Kb) typing effect javascript library.

# Installation

```javascript
<script src ="typer.js"></script>

var typer = new typer('here is your DOM ID');```
```

# Example

[Demo page](https://html50.github.io/typer.js)

```javascript
<script src="typer.js"></script>
<script>
var luke = new typer('luke');
var vader = new typer('vader');
vader.type('Luke').end().type(1600).del()
luke.end().type(900).type('What').end().type(3500).del()

vader.type('I am your father.').end().type(5000).del()
luke.type('That \'s not tru').del(3).type(100).type('possible!').end().type(6500)

vader.del().type('I am no joking.').type(500).type(' son').end().type(5570)
luke.del().type('Nooooooooo!').end().type(5570)

vader.del().type('It is DNA, it\'s science').end().type(5050).del().repeat()
luke.del().type('No!No!No! Noooooooo!').end().type(1830).del().repeat()
</script>
```

here is a demo of typer.js and looks exactly like [TheaterJs](https://codepen.io/Zhouzi/pen/JoRazP)





# Documentation

### typer.type(String, Number)

**arguments**

String : nessesary

Number : optional

```
//with a default speed(120)
typer.type('anything you want');

//with a custom speed
typer.type('anything you want',200);
```

### typer.del(Number)

**arguments**

Number : optional

```
//this will delete all content of selected DOM
typer.del();

//wll delete 10 charater
typer.del(10);
```

### typer.end()

```
//end() method delete the jumping cursor, you dont need to worry about the cursor, i will 
//automatically appear when type() or del() is invoked
typer.end();
```

### typer.repeat()

```
//put this method in the end of typing, will make typing go forever
typer.repeat();
```



# others

Well, you need to modify CSS file all by yourself, in this demo, I copied TheatherJs CSS to my page.

Feel free to contact me. Thanks.
