<template>
    <div class="input-wrap">
  <input type="text" v-model="newItem" @keyup.enter="submit()"/>
<button @click="submit()">add your fantastic movie</button>
</div>
</template>
<script>

export default {
  name: "InputAdd",
  data() {
return {
  newItem: "",
   guests: [],
   guest: {title: "", index: ""},
}
  },
  methods: {
  
submit() {
 
  if (this.newItem.length !== 0)
   {

  this.guests.push({
  title: this.newItem,
  index: this.guests.length+1
  
  })
  fetch("https://pros-e5cee-default-rtdb.asia-southeast1.firebasedatabase.app/guests.json", {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: this.newItem,
    
    })
  });
 this.newItem = ""
}}
  }

}

</script>
<style scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
}
.input-wrap input {
  width: 300px;
  height: 30px;
}


button {
  text-align: center;
  margin: 40px auto;
   margin: 20px;
  outline: none;
   position: relative;
  color: rgb(8, 1, 1);
  z-index: 2;
  line-height: 40px;
  padding: 0;
    background: #fff;
  line-height: 42px;
  padding: 0;
  border: 1px solid rgb(255, 255, 255);
  width: 200px;
}
button:before,
button:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #000;
  transition:500ms ease all;
}
button:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
button:hover:before,
button:hover:after{
  width:100%;
  transition:800ms ease all;
}

</style>