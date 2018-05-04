---
layout: without-footer
title: Kontakt
permalink: /contact/
active: /contact
grid-column: 5
---

<div class="container">
	<div class="about">
		<p>Stwórzmy&nbsp;coś&nbsp;niesamowitego.&nbsp;Razem!</p>
	</div>
	{% comment %} <div class="content"> {% endcomment %}
		<div class="contact">
			<ul class="contact-details">
				<li>
					<img class="icon" src="/assets/icons/mail.svg" width="12px" height="12px">
					<!--email_off-->
					<a href="mailto:kontakt@magdalena-piatek.pl" title="Napisz do mnie">kontakt@magdalena-piatek.pl</a></li>
					<!--email_off-->
				<li>
					<img class="icon" src="/assets/icons/phone.svg" width="12px" height="12px">
					<a target="_blank" href="tel:48506318022">+48&nbsp;506&nbsp;318&nbsp;022</a></li>
				<li>
					<img class="icon" src="/assets/icons/linkedin.svg" width="12px" height="12px">
					<a target="_blank" href="https://www.linkedin.com/in/magdalena-pi%C4%85tek-297330a8/" title="Mój profil na LinkedIn">LinkedIn</a></li>
				<li>
					<img class="icon" src="/assets/icons/telegram.svg" width="12px" height="12px">
					<a target="_blank" href="https://telegram.me/magdalena_piatek">Telegram</a></li>
				<li>
					<img class="icon" src="/assets/icons/vcard.svg" width="12px" height="12px">
					<a target="_blank" href="../files/magdalena-piatek.vcf">Moja wizytówka vCard</a></li>
				<li>
					<img class="icon" src="/assets/icons/cv.svg" width="12px" height="12px">
					<a target="_blank" href="../files/cv-magdalena-piatek.pdf">Moje CV</a></li>
			</ul>
			<form method="POST" action="https://formspree.io/kontakt@magdalena-piatek.pl">
				<input name="name" placeholder="Twoje imię" type="text" required>
				<input name="email" placeholder="Twój adres e-mail" type="email" required>
				<input type="hidden" name="_language" value="pl" />
				<input type="hidden" name="_subject" value="Wiadomość z formularza - magdalena-piatek.pl" />
				<input type="hidden" name="_next" value="/thank-you/" />
				<textarea name="message" placeholder="Twoja wiadomość" required></textarea>
				<button type="submit">Wyślij</button>
			</form>
		</div>
    {% comment %} </div> {% endcomment %}
</div>
