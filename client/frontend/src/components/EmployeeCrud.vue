<template>
    <div id="EmployeeCrud">
        <div class="container mt-5">

            <h1>Employee Registration</h1>
            <div>
                <form @submit.prevent="save">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" v-model="employee.name" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input type="tel" v-model="employee.phone" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="address">Address:</label>
                        <input type="text" v-model="employee.address" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                </form>
            </div>
        </div>

        <div class="container mt-5">
            <h1>Employeee List</h1>
            <p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in result" v-bind:key="employee.id">
                        <td>{{ employee._id }}</td>
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.address }}</td>
                        <td>{{ employee.phone }}</td>
                        <td>
                            <button type="button" class="btn btn-primary" @click="edit(employee.id)">Edit</button>
                            <button type="button" class="btn btn-danger" @click="remove(employee.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </p>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

export default {
  name: 'EmployeeCrud',
  data () {
    return {
      result: {},
      employee: {
        _id: '',
        name: '',
        address: '',
        phone: ''
      }
    }
  },
  created () {
    this.EmployeeLoad()
  },
  mounted () {
    console.log('mounted() called ....')
  },
  methods: {
    EmployeeLoad () {
      var page = 'http://localhost:5000/user/getAll'
      axios.get(page).then(
        ({ data }) => {
          this.result = data.data
        }
      )
    },

    save () {
      if (this.employee._id === '') {
        this.saveData()
      } else {
        this.updateData()
      }
    },

    saveData () {
      axios.post('http://localhost/user/create', this.employee)
        .then(
          ({ data }) => {
            alert('User saved')
            this.EmployeeLoad()
          }
        )
    },

    edit (employee) {
      this.employee = employee
    },

    updateData () {
      var editrecords = 'http://localhost:5000/user/update/' + this.employee._id
      axios.patch(editrecords.this.employee).then(
        ({ data }) => {
          this.employee.name = ''
          this.employee.address = ''
          this.employee.phone = ''
          this.id = ''
          alert('Updated')
          this.EmployeeLoad()
        }
      )
    },

    remove (employee) {
      var url = `http://localhost:5000/user/remove/${employee._id}`
      axios.delete(url)
      alert('Deleted')
      this.EmployeeLoad()
    }
  }
}
</script>

<style>
#EmployeeCrud {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
