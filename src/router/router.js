import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/views/Home.vue'
import ProdutosPage from '@/views/Produtos.vue'
import SobrePage from '@/views/Sobre.vue'
import ContatoPage from '@/views/Contato.vue'
import SacolaPage from '@/views/Sacola.vue'
import KitBabyPage from '@/views/KitBabyPage.vue'
import BolsasPage from '@/views/BolsasPage.vue'
import DecoracaoPage from "@/views/DecoracaoPage";
import TapetesPage from "@/views/TapetesPage";
import CestaoPage from "@/views/CestaoPage";
import LembrancinhasPage from "@/views/LembrancinhasPage";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/produtos',
        name: 'produtos',
        component: ProdutosPage,
    },
    {
        name: 'KitBaby',
        path: '/produtos/kitbaby',
        component: KitBabyPage
    },
    {
        name: 'Bolsas',
        path: '/produtos/bolsas',
        component: BolsasPage
    },
    {
        name: 'Decoracao',
        path: '/produtos/decoracao',
        component: DecoracaoPage
    },
    {
        name: 'Tapetes',
        path: '/produtos/tapetes',
        component: TapetesPage
    },
    {
        name: 'Cestao',
        path: '/produtos/cestao',
        component: CestaoPage
    },
    {
        name: 'Lembrancinhas',
        path: '/produtos/lembrancinhas',
        component: LembrancinhasPage
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: SobrePage
    },
    {
        path: '/contato',
        name: 'contato',
        component: ContatoPage
    },
    {
        path: '/sacola',
        name: 'sacola',
        component: SacolaPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router