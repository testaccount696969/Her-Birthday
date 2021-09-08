$('.content').delay(10000).fadeOut();
$('.root').delay(10001).fadeIn();

async function typeSentence(sentence, divRef) {
    const letters = sentence.split('');

    for(let i = 0; i < letters.length; i++) {
        await waitForMs(250);
        $(divRef).append(letters[i]);
    }

}

async function removeSentence(divRef, length) {
    const sentence = divRef.html();
    const letters = sentence.split('');
    for(let i = 0; i < length; i++) {
        await waitForMs(100);
        letters.pop();
        divRef.html(letters.join(''));
    }

}

function waitForMs(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

$( document ).ready(async function() {
    await waitForMs(13000);
    await typeSentence("Hi...", $('.letter-black'));
    await waitForMs(1000);
    removeSentence($('.letter-black'), 5);
    await waitForMs(1500);
    await typeSentence("First of all, a very Happy Birthday!🥳", $('.letter-black'));
    await waitForMs(2000);
    removeSentence($('.letter-black'), $('.letter-black').html().length);
    await waitForMs(4000);
    await typeSentence("I so wanted to be with you today...😢", $('.letter-black'));
    await waitForMs(2500);
    removeSentence($('.letter-black'), $('.letter-black').html().length);
    await waitForMs(5000);
    await typeSentence("Anyways...", $('.letter-black'));
    await waitForMs(2800);
    removeSentence($('.letter-black'), $('.letter-black').html().length);
    await waitForMs(3500);
    await typeSentence("Here's something, I've made for you...", $('.letter-black'));
    await waitForMs(4000);
    removeSentence($('.letter-black'), $('.letter-black').html().length);
    await waitForMs(4200);
    await typeSentence("I hope you'll like it...❤️", $('.letter-black'));
    await waitForMs(5800);
    await typeSentence("PS: You're boyfriend can be romantic too🥱", $('.post-scriptum .letter-small'));
  });

  $('.root').delay(75000).fadeOut();
  $('.spotify').delay(85000).fadeIn();
  $('.post-scriptum').delay(85000).fadeIn();
