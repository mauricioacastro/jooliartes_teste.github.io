<template>
  <div>
    <NavBar/>
    <div class="container-margin">
      <BreadCrumb texto="Sobre"/>
      <div>
        <p>Olá! Eu sou a Josi Oliveira fundadora da Jooli Artes, me considero uma eterna apaixonada por crochê, e este amor todo vem de berço, pois aos seis anos já estava tecendo as minhas primeiras peças de tricô e crochê. Formada em administração, mas com um coração de artesã e uma eterna curiosa. Em 2021 decidi escutar o meu coração e dar inicio ao meu sonho e me tornei empreendedora.</p>
        <p>Nasceu então a Jooli Artes tendo como objetivo tornar os sentimentos de amor, carinho e aconchego em algo tangível, que possa ser passado de geração em geração, assim como aqueles itens que fazem parte de nossas memórias de infância. Quando recordamos do carinho de nossas avós, ao tecer aquelas peças lindas e cheias de ancestralidade.</p>
        <p>Através das técnicas milenares do crochê, transformadas e modernizadas, nossas peças trazem este toque especial da junção de dois mundos, o passado e o presente, unidos em um novo conceito de decoração. Atendemos hoje principalmente famílias que sonham decorar seus lares com personalidade, amor e aconchego. Nossa missão é tornar este sonho realidade.</p>
        <h1>FORMAS DE PAGAMENTO</h1>
        <p>Pix - 50% de sinal e o restante de 50% no dia do envio.</p>
        <p> Cartão de credito com link de pagamento do Mercadopago - Acrescido de 5% no valor final da compra (juros a cada parcela).</p>
        <p>Picpay - com link de pagamento - Acrescido de 3,99% no valor final de compras acima de R$ 300,00 (juros a cada parcela).</p>
        <p>Descontos em compras à vista.</p>
        <h1>ENTREGAS</h1>
        <p>Enviamos para todo o Brasil através dos correios e transportadoras.</p>
        <p>Utilizamos a plataforma do Melhor Envio para oferecer as melhores opções de frete para você.</p>
        <p>Se você mora em Gravataí ou Cachoeirinha e gostaria que a entrega seja feita por mim. Será um prazer te conhecer! (Taxa de entrega R$ 15,00, faremos o agendamento prévio)</p>
        <p>Você também pode retirar diretamente comigo aqui no ateliê em Gravataí - RS. Vamos amar a sua visita! (faremos o agendamento prévio).</p>
        <p>Se preferir, também podemos cotar a entrega com Moto Boy ou Uber Entregas.	</p>
      </div>
      <FooterBar/>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
import BreadCrumb from "@/components/BreadCrumb";
export default {
  name: 'SobrePage',
  components: {
    BreadCrumb,
    FooterBar,
    NavBar,
  },
}
</script>
<style scoped>
.container-margin{
  margin-bottom: 5rem;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  font-family: "Para", "Lustria", arial;
  margin-top: 2.5rem;
  color: #23756e;
  text-align: center;
}

p {
  font-family: "Lustria", "Para", arial;
  margin: 1rem 10rem 1rem 10rem;
  color: #23756e;
  text-align: justify;
}

</style>