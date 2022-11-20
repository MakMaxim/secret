<template>
   <div class="wrapper">
      <div class="form">
         <form action="#" class="form__body">
            <h1 class="form__title">Введите секретное сообщение</h1>
            <div class="form__item">
               <textarea
                  name="message"
                  autocomplete="off"
                  class="form__input textarea__item"
                  v-model="text"
                  @keypress.enter.prevent="postMessage(text)"
               >
               </textarea>
            </div>
            <button
               type="submit"
               class="form__button"
               @click.prevent="postMessage(text, ind)"
            >
               Отправить
            </button>
         </form>
      </div>
      <div class="link" v-if="link">
         <div class="link__title">Ваша ссылка:</div>
         <div class="link__body">{{ link }}</div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
export default {
   data() {
      return {
         text: '',
         link: '',
         ind: '',
      };
   },
   methods: {
      postMessage(text, ind) {
         if (this.text === '') {
            return;
         }
         ind = uuidv4();
         axios
            .post('http://localhost:8080/api/mes', {
               mes: text,
               link: ind,
            })
            .then(function (response) {
               console.log(response);
            })
            .catch(function (error) {
               console.log(error);
            });
         this.text = '';
         this.link = `http://localhost:8080/api/mes/${ind}`;
      },
   },
};
</script>

<style lang="scss">
.wrapper {
   box-sizing: border-box;
   max-width: 500px;
   margin: 0px auto;
   color: rgb(8, 81, 21);
   padding: 10px 0;
}
.form {
   * {
      outline: none;
   }
   &__title {
      font-size: 35px;
      font-weight: 700;
      margin: 0px 0px 30px 0px;
   }
   &__item {
      margin: 0px 0px 20px 0px;
   }
   &__input {
      height: 50px;
      border-radius: 5px;
      width: 100%;
      font-size: 18px;
      transition: all 0.4s ease 0s;
      &:focus {
         box-shadow: 0 0 15px #7a956b;
      }
   }
   &__button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 60px;
      background-color: #7a956b;
      color: #fff;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      cursor: pointer;
      border-radius: 20px;
      box-shadow: 0 5px 0 #161b13;
      transition: background-color 0.5s ease 0s;
      position: relative;
      top: 0;
      &:hover {
         background-color: #4f6146;
      }
      &_active {
         top: 3px;
         box-shadow: 0 2px 0 #161b13;
      }
   }
}

textarea.form__input {
   min-height: 160px;
   resize: vertical;
}

.link {
   &__title {
      font-size: 35px;
      font-weight: 700;
      margin: 40px 0 15px;
   }
   &__body {
      border: 2px #161b13 solid;
      border-radius: 15px;
      padding: 10px 10px 10px 20px;
      font-size: 22px;
      font-weight: 500;
   }
}
</style>
