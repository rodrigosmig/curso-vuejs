<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form v-if="!sent" class="painel">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->

				<NomeCompleto v-model="nomeCompleto" />
				
				<rotulo nome="E-mail">
					<input v-model="user.email" type="text">
				</rotulo>
				<rotulo nome="Senha">
					<input v-model="user.password" type="password">
				</rotulo>
				<rotulo nome="Armazenar Dados?">
					<input type="checkbox">
				</rotulo>

				<button @click.prevent="send">Enviar</button>
					
			</form>
			<div v-else class="painel">
				<div class="cabecalho">Resultado</div>

				<rotulo nome="Nome">
					<span>{{ nomeCompleto.name }}</span>
				</rotulo>

				<rotulo nome="Sobrenome">
					<span>{{ nomeCompleto.surname }}</span>
				</rotulo>

				<rotulo nome="E-mail">
					<span>{{ user.email }}</span>
				</rotulo>

				<rotulo nome="Senha">
					<span>{{ user.password }}</span>
				</rotulo>
				<rotulo nome="Armazena Dados">
					<span>{{ storage }}</span>
				</rotulo>

				<button @click.prevent="back">Voltar</button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data() {
		return {
			storage: true,
			sent: false,
			nomeCompleto: {
				name: '',
				surname: ''
			},
			user: {
				email: '',
				password: '',
			}
		}
	},
	methods: {
		send() {
			this.sent = true
		},
		back() {
			this.sent = false
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
