<template>
    <section class="subsc pt-5 pb-5">
        <div class="container text-center">
            <h2>Subscribe for newsletter</h2>
            <form class="form-inline my-2 my-lg-0 d-flex justify-content-center pt-2 pb-3">
                <input class="form-control mr-sm-2" type="text" placeholder=Email v-model="inputValue">
                <button @click.prevent="handleSubmit" class="btn btn-success my-2 my-sm-0" type="submit">Subscribe</button>
            </form>
            <div v-if="handleResult" class="row d-flex justify-content-center">
                <div class="col-md-4">
                    <div class="alert alert-danger">
                        <span class="alert-heading">{{ handleResult }}</span>
                    </div>
                </div>
            </div>
            <p>1@gmail.com</p>
            <p>2222@gmail.com</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique beatae eius velit adipisci nesciunt ea sit? Vero magni, beatae velit molestias cum tempora est deleniti eius quaerat expedita. Vero vitae laborum ratione natus? Voluptatem recusandae quis nihil reiciendis eveniet modi, totam unde illum, voluptate iusto sunt voluptates esse corrupti! Ratione?</p>


        </div>
    </section>
</template>
<script>
import getDataFromFirebase from '../scripts/fetch.js'

export default {
    data() {
        return {
            inputValue:'',
            handleResult: '',
            isEmailUnique: true,
        }
    },
    
    methods: {
        handleSubmit(ev) {
            //если поле пустое показываем ошибку
            if(!this.inputValue) {
                this.handleResult = 'Please, fill the input';
                this.clearMsgField();
            }
            //если поле не валидное на регекс емейла - показываем ошибку
            else if(!(/\S+@\S+\.\S+/).test(this.inputValue)) {
                this.handleResult = 'Please, enter a correct email';
                this.clearMsgField();
            }
            else if((/\S+@\S+\.\S+/).test(this.inputValue)) {
                this.checkUnique()
                // alert(this.isEmailUnique)
            }
            
        },
        async checkUnique() {
            //делаем запрос

            let emailsFromDB = await getDataFromFirebase('https://vue-pizza-108de.firebaseio.com/subscribtions.json');
            //STUCKED



        },
        clearMsgField() {
            setTimeout(() => {
                this.handleResult = '';
                this.inputValue = ''
            }, 3000)
        },
        postToDB() {
            let newEmail = {email: this.inputValue}
            fetch('https://vue-pizza-108de.firebaseio.com/subscribtions.json', {
                method: 'POST',
                body: JSON.stringify(newEmail)
            }).then(resp => {
                // console.log(resp);
            })
        }
        
    },
}
</script>
<style lang="">
    
</style>