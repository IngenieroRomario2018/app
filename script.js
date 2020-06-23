alert("Disclaimer : IGNORE THE ERRORS!! This is made by me only, dont copy it. Upvote my code and tell me how you like it. :D")

function page2() {
    var headings = document.querySelector('.intro');
    var form = document.querySelector('.sign')
    headings.remove();
    form.style.display = "none";
    document.body.style.background = 'linear-gradient(#B2FEFA, #0ED2F7) fixed';
    var h2 = document.createElement('h2');
    h2.setAttribute('class', 'select');
    h2.textContent = 'Select which categories you like';
    document.body.appendChild(h2);
    var btns = document.querySelector('.btns');
    btns.style.display = "block";
    var submit = document.querySelector('.submit');
    submit.style.display = "block";

    document.body.appendChild(btns);
}

function page3() {
    document.querySelector('.user').style.display = "block";
    document.querySelector('.select').remove();
    document.querySelector('.btns').remove();
    document.querySelector('.submit').remove();
    document.body.style.background = 'linear-gradient(#DA4453, #89216B) fixed';
    var h2 = document.createElement('h2');
    h2.setAttribute('class', 'welc');
    var first = document.querySelector('.fn');
    h2.textContent = 'Welcome ' + first.value;
    document.body.appendChild(h2);
    var h4 = document.createElement('h4');
    h4.setAttribute('class', 'welc2');
    h4.textContent = 'lets start exploring events near you ';
    document.body.appendChild(h4);

    var loc = document.createElement('input');
    loc.setAttribute("class", 'loc');
    loc.setAttribute("placeholder", "Enter you location EX: California, USA");
    document.body.appendChild(loc);
    document.querySelector('.btnp3').style.display = "block";







}

function page4() {

    document.querySelector('.btnp3').remove();
    document.querySelector('.welc').remove();
    document.querySelector('.welc2').remove();
    document.querySelector('.user').remove();
    document.querySelector('.loc').style.display = "none";
    document.body.style.background = 'white';
    document.querySelector('.post1').style.display = "block";
    document.querySelector('.header').style.display = "block";
    document.querySelector('.post2').style.display = "block";
    document.querySelector('.post3').style.display = "block";
    document.querySelector('.newevent').style.display = "none";


    document.querySelector('.profile').style.display = "block";
    var loc = document.querySelector('.loc');
    var p1 = document.querySelector('.locdate');
    var p2 = document.querySelector('.locdate2');
    var p3 = document.querySelector('.locdate3');
    var p4 = document.querySelector('.locdate4');
    p1.textContent = "location: " + loc.value + '' + " Date:  June 26th 2020, 6:00 PM";
    p2.textContent = "location: " + loc.value + '' + " Date: June 28th 2020, 2:00 PM";
    p3.textContent = "location: " + loc.value + '' + " Date: July 4th 2020, 8:00 PM";
    p4.textContent = "location: " + loc.value + '' + " Date: July 10th 2020, 5:00 PM";
}

function local() {
    document.querySelector('.post1').style.display = "block";
    document.querySelector('.header').style.display = "block";
    document.querySelector('.post2').style.display = "block";
    document.querySelector('.post3').style.display = "block";
    document.querySelector('.private').style.display = "none";
    document.querySelector('.newevent').style.display = "none";

}


function select() {
    var btns = document.querySelector('.btn1');
    btns.style.backgroundColor = "pink";
    if (btns.onclick) {
        btns.disabled = true;
    }
}

function select2() {
    var btn2 = document.querySelector('.btn2');
    btn2.style.backgroundColor = "pink";
    if (btn2.onclick) {
        btn2.disabled = true;
    }
}

function select3() {
    var btn3 = document.querySelector('.btn3');
    btn3.style.backgroundColor = "pink";
    if (btn3.onclick) {
        btn3.disabled = true;
    }
}

function select4() {
    var btn4 = document.querySelector('.btn4');
    btn4.style.backgroundColor = "pink";
    if (btn4.onclick) {
        btn4.disabled = true;
    }
}

function select5() {
    var btn5 = document.querySelector('.btn5');
    btn5.style.backgroundColor = "pink";
    if (btn5.onclick) {
        btn5.disabled = true;
    }
}

function select6() {
    var btn6 = document.querySelector('.btn6');
    btn6.style.backgroundColor = "pink";
    if (btn6.onclick) {
        btn6.disabled = true;
    }
}

function select7() {
    var btn7 = document.querySelector('.btn7');
    btn7.style.backgroundColor = "pink";
    if (btn7.onclick) {
        btn7.disabled = true;
    }
}

function select8() {
    var btn8 = document.querySelector('.btn8');
    btn8.style.backgroundColor = "pink";
    if (btn8.onclick) {
        btn8.disabled = true;
    }
}

function decide() {

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your are interested in this event!',
        showConfirmButton: true,

    })

}

function decide2() {

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your are going to this event!',
        showConfirmButton: true,

    })
}

function priv() {
    var p1 = document.querySelector('.post1');
    var p2 = document.querySelector('.post2');
    var p3 = document.querySelector('.post3');
    document.querySelector('.newevent').style.display = "none";

    document.querySelector('.private').style.display = "block";
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
}

function like() {
    var like1 = document.querySelector('.like');
    var like2 = document.querySelector('.like-2');
    var like3 = document.querySelector('.like-3');
    var like4 = document.querySelector('.like-4');
    if (like1.onclick) {
        like1.style.color = "blue";
    }
}

function like2() {
    var like2 = document.querySelector('.like-2');
    if (like2.onclick) {
        like2.style.color = "blue";
    }
}

function like3() {

    var like3 = document.querySelector('.like-3');
    if (like3.onclick) {
        like3.style.color = "blue";
    }
}

function like4() {

    var like4 = document.querySelector('.like-4');
    if (like4.onclick) {
        like4.style.color = "blue";
    }
}

function reply() {
    var text = document.querySelector('.cmnt');
    var submit = document.querySelector('.csub');
    var submit2 = document.querySelector('.csub2');
    var submit3 = document.querySelector('.csub3');
    var submit4 = document.querySelector('.csub4');
    var name = document.querySelector('.fn');
    var reply = document.querySelector('.reply');

    if (submit.onclick) {
        reply.textContent = name.value + ": " + text.value;
    }
    if (text.value.length === 0) {
        reply.textContent = '';
        alert("Please submit a reply");

    }
    if (name.value.length === 0) {
        reply.textContent = '';
        alert("Go to the first page to enter your name to submit a comment. ")
    }


}

function reply2() {
    var text = document.querySelector('.cmnt2');
    var submit2 = document.querySelector('.csub2');
    var name = document.querySelector('.fn');
    var reply = document.querySelector('.reply2');

    if (submit2.onclick) {
        reply.textContent = name.value + ": " + text.value;
    }
    if (text.value.length === 0) {
        reply.textContent = '';
        alert("Please submit a reply");

    }
    if (name.value.length === 0) {
        reply.textContent = '';
        alert("Go to the first page to enter your name to submit a comment. ")
    }


}

function reply3() {
    var text = document.querySelector('.cmnt3');
    var submit3 = document.querySelector('.csub3');
    var name = document.querySelector('.fn');
    var reply = document.querySelector('.reply3');

    if (submit3.onclick) {
        reply.textContent = name.value + ": " + text.value;
    }
    if (text.value.length === 0) {
        reply.textContent = '';
        alert("Please submit a reply");

    }
    if (name.value.length === 0) {
        reply.textContent = '';
        alert("Go to the first page to enter your name to submit a comment. ")
    }


}

function reply4() {
    var text = document.querySelector('.cmnt4');
    var submit4 = document.querySelector('.csub4');
    var name = document.querySelector('.fn');
    var reply = document.querySelector('.reply4');

    if (submit4.onclick) {
        reply.textContent = name.value + ": " + text.value;
    }
    if (text.value.length === 0) {
        reply.textContent = '';
        alert("Please submit a reply");

    }
    if (name.value.length === 0) {
        reply.textContent = '';
        alert("Go to the first page to enter your name to submit a comment. ")
    }


}


function addEvent() {
    var card = document.createElement('div');
    card.className = "card";
    var des = document.createElement('textarea');
    des.setAttribute("rows", "4");
    des.setAttribute("cols", "20");
    des.setAttribute("placeholder", "Enter event description");
    des.className = "description";
    var title = document.createElement('input');
    title.setAttribute("type", "text");
    title.setAttribute("placeholder", "Enter event title");
    title.className = "title";
    card.appendChild(title);
    card.appendChild(des);
    var submit = document.querySelector('.eventsub');
    submit.textContent = "Submit";
    card.appendChild(submit);
    document.body.appendChild(card);
    document.querySelector(".newevent").style.display = "none";
}

function collect() {

    document.querySelector('.post1').style.display = "none";
    document.querySelector('.post2').style.display = "none";
    document.querySelector('.post3').style.display = "none";
    document.querySelector('.private').style.display = "none";
    document.querySelector('.newevent').style.display = "block";
    //da real stuff
    var post = document.createElement('div');
    post.className = "ownpost";
    var icon = document.createElement('li');
    icon.setAttribute("class", "fas fa-user-circle fa-2x");
    icon.style.display = "block";
    var title = document.createElement('h1');
    title.className = "event-title";
    title.textContent = document.querySelector('.title').value

    var des = document.createElement('p');
    des.className = "event-des";
    des.textContent = document.querySelector('.description').value

    post.appendChild(icon);
    post.appendChild(title);
    post.appendChild(des);
    document.body.appendChild(post);


}

function goaway() {
    document.querySelector(".card").style.display = "none";
    document.querySelector(".newevent").style.display = "none";
}


function status() {
    var post = document.querySelector('.pstatus');
    var text = document.querySelector('.status');
    var submit = document.querySelector('.psub');

    if (submit.onclick) {
        post.textContent = "My status: " + text.value;
        text.style.display = "none";
        submit.style.display = "none";
    }
    if (text.value.length === 0) {
        alert("Please type in your status");
        post.textContent = "";
        text.style.display = "inline-block";
        submit.style.display = "block";
    }
}