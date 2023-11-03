function getRandomRange(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data:()=>({
        playerHealth:100,
        monsterHealth:100,
        currentRound:0
    }),
    methods:{
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomRange(5,12);
            this.monsterHealth -=   attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomRange(8,15);
            this.playerHealth -=   attackValue;
        },
        specialAttachPlayer(){
            this.currentRound++;
            const attackValue = getRandomRange(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    },
    computed:{
        getMonsterStyles(){
            return {width:monsterHealth + '%'}
        },
        getPlayerStyles(){
            return {width:playerHealth + '%'}
        },
        mayUseSpecialAttack(){
            return currentRound % 3 !== 0
        }
    }
});

app.mount("#game");