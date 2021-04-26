<template>
  <div class="modal-body" style="text-align: center">
    <label>ID Evento: {{ $route.params.id }} </label>
    <br />
    <label>Nome do Evento: {{ this.dataRoute.nome }} </label>
    <br />
    <label>Local do Evento: {{ this.dataRoute.agendamento.local }} </label>
    <br />
    <label>Data de Início: {{ renderData(this.dataRoute.agendamento.dataHoraInicio) }} </label>
    <br />
    <label>Data de Fim: {{ renderData(this.dataRoute.agendamento.dataHoraFim) }} </label>
    <br />
    <label>Horário de Início: {{ renderHora(this.dataRoute.agendamento.dataHoraInicio) }} </label>
    <br />
    <label>Horário de Fim: {{ renderHora(this.dataRoute.agendamento.dataHoraFim) }} </label>
    <br />
    <label>Status: {{ this.dataRoute.status }} </label>
    <br />
    <label>Descrição: {{ this.dataRoute.descricao }} </label>
    <br />

    <ul class = "Lotes" >Lotes:
      <li v-for="lote in dataRoute.lotes" :key="lote.idLote">
        {{ lote.dataAbertura }} {{ lote.dataFechamento }} {{ lote.valor }}
      </li>
    </ul>

    <listagem v-bind:listData="this.res" />
  </div>
</template>

<script src="./detalhes.js"/>
<style scoped src="./detalhes.css"/>