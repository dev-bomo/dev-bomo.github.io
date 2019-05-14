---
layout: none
title: Beta
permalink: /beta/
---


<div id="content">
</div>

<script type="application/javascript">
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('lang');
    var pageContentHtml;
    if(myParam === 'ro') {
        pageContentHtml = `<div class=\"register-print\">
    <p>Meridia Arbour a fost testat temeinic inainte de a ajunge in faza de beta testing dar daca apar probleme de hardware vom face tot posibilul sa le remediem.</p>
    <p>Programul beta incepe pe 9 mai 2019, primele device-uri vor pleca de la noi incepand cu 1 august 2019. Facem asta ca sa avem timp sa ne ocupam de micile probleme ramase la hardware, sa facem aplicatia mai placuta vizual, sa testam mult in house si sa rezolvam toata partea legala.</p>
    <p>Device-urile vor fi livrate in ordinea inscrierii in program si ne vom limita la 50 de bucati.</p>
    <p>Suntem o companie la inceput de drum si e scump sa construiesti hardware. De aceea vom cere un mic avans in momentul inscrierii in programul de beta testing. Poti sa alegi cat vrei sa contribui urmand ca restul sa il platesti cand produsul este livrat.</p>
</div>`
    } else if (myParam === 'en') {
        pageContentHtml = `<div class=\"register-print\">
    <p>The Arbour has been properly tested before reaching the beta phase but if there's any failure
        we'll be happy to get it fixed or replaced.</p>
    <p>The beta testing program starts 9th of May 2019, the first devices will ship 1st of August 2019. This is so     we can iron out the kinks in the prototype hardware, make the app prettier, do a lot of testing and figure     out all the legal parts.</p>
    <p>Devices go out on a first registered basis and the number will be capped at 50</p>
    <p>We're a company that's just starting out and building hardware is expensive. That's why we
        will ask for a small upfront payment when you sign up to be part of the Arbour beta testing
        program. You can choose the contribution amount and you'll pay the rest when your product is
        ready.</p>
</div>`
    }

    var topEl = document.getElementById('content');
    topEl.innerHTML = pageContentHtml;
</script>

