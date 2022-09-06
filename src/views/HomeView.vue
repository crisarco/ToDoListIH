<template>
  <div class="home">
    <!-- <h1>Esta es la vista de Home</h1> -->
    <button @click="signOut">SignOut</button>
  </div>
<section class="vh-100">
  <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
            <div class="card-body py-4 px-4 px-md-5">

              <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
                <i class="fas fa-check-square me-1"></i>
                <u>My Todo-s</u>
              </p>

              <div class="pb-2">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-row align-items-center">
                      <label for="exampleFormControlInput1">
                        <input type="text"
                              class="form-control form-control-lg"
                              id="exampleFormControlInput1"
                              placeholder="Add new...">
                      </label>
                      <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                          class="fas fa-calendar-alt fa-lg me-3">ABC</i></a>
                      <div>
                        <button type="button" class="btn btn-primary">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="my-4">

              <div class="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                <p class="small mb-0 me-2 text-muted">Filter</p>
                <!-- <select class="select">
                  <option value="1">All</option>
                  <option value="2">Completed</option>
                  <option value="3">Active</option>
                  <option value="4">Has due date</option>
                </select>
                <p class="small mb-0 ms-4 me-2 text-muted">Sort</p>
                <select class="select">
                  <option value="1">Added date</option>
                  <option value="2">Due date</option>
                </select>
                <a href="#!" style="color: #23af89;" data-mdb-toggle="tooltip" title="Ascending"><i
                    class="fas fa-sort-amount-down-alt ms-2"></i></a>
              </div> -->

              <ul class="list-group list-group-horizontal rounded-0 bg-transparent">
                <li
                  class="list-group-item d-flex align-items-center
                        ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                  <div class="form-check">
                    <input class="form-check-input me-0"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked1"
                          aria-label="..." checked />
                  </div>
                </li>
                <li
                  class="list-group-item px-3 py-1 d-flex
                          align-items-center flex-grow-1 border-0 bg-transparent">
                  <p class="lead fw-normal mb-0">Buy groceries for next week</p>
                </li>
                <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                  <div class="d-flex flex-row justify-content-end mb-1">
                    <a href="#!" class="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
                        class="fas fa-pencil-alt me-3">ABC</i></a>
                    <a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo">
                      <i class="fas fa-trash-alt">ABC</i></a>
                  </div>
                  <div class="text-end text-muted">
                    <a href="#!" class="text-muted" data-mdb-toggle="tooltip" title="Created date">
                      <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>28th Jun 2020</p>
                    </a>
                  </div>
                </li>
              </ul>
              <ul class="list-group list-group-horizontal rounded-0">
                <li
                  class="list-group-item d-flex align-items-center
                        ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                  <div class="form-check">
                    <input class="form-check-input me-0"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked2"
                          aria-label="..." />
                  </div>
                </li>
                <li
                  class="list-group-item px-3 py-1 d-flex align-items-center
                        flex-grow-1 border-0 bg-transparent">
                  <p class="lead fw-normal mb-0">Renew car insurance</p>
                </li>
                <li class="list-group-item px-3 py-1 d-flex align-items-center
                          border-0 bg-transparent">
                  <div
                    class="py-2 px-3 me-2 border border-warning rounded-3
                          d-flex align-items-center bg-light">
                    <p class="small mb-0">
                      <a href="#!" data-mdb-toggle="tooltip" title="Due on date">
                        <i class="fas fa-hourglass-half me-2 text-warning">ABC</i>
                      </a>
                      28th Jun 2020
                    </p>
                  </div>
                </li>
                <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                  <div class="d-flex flex-row justify-content-end mb-1">
                    <a href="#!" class="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i
                        class="fas fa-pencil-alt me-3">ABC</i></a>
                    <a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo">
                      <i class="fas fa-trash-alt">ABC</i></a>
                  </div>
                  <div class="text-end text-muted">
                    <a href="#!" class="text-muted" data-mdb-toggle="tooltip" title="Created date">
                      <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>28th Jun 2020</p>
                    </a>
                  </div>
                </li>
              </ul>
              <ul class="list-group list-group-horizontal rounded-0 mb-2">
                <li
                  class="list-group-item d-flex align-items-center
                        ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                  <div class="form-check">
                    <input class="form-check-input me-0"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked3"
                          aria-label="..." />
                  </div>
                </li>
                <li
                  class="list-group-item px-3 py-1 d-flex align-items-center
                        flex-grow-1 border-0 bg-transparent">
                  <p class="lead fw-normal mb-0 bg-light w-100 ms-n2 ps-2 py-1 rounded">
                    Sign up for online course</p>
                </li>
                <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                  <div class="d-flex flex-row justify-content-end mb-1">
                    <a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo">
                      <i class="fas fa-trash-alt">ABC</i></a>
                  </div>
                  <div class="text-end text-muted">
                    <a href="#!" class="text-muted" data-mdb-toggle="tooltip" title="Created date">
                      <p class="small mb-0"><i class="fas fa-info-circle me-2"></i>28th Jun 2020</p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';

export default {
  name: 'HomeView',
  components: { },
  computed: {
    ...mapState(userStore, ['user']),
  },
  methods: {
    ...mapActions(userStore, ['signOut']),
  },
  watch: {
    user() {
      if (!this.user) {
        this.$router.push({ path: '/auth' });
      }
    },
  },
};
</script>

<style>
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: left;
    background-color: #6200EA;
}

i {
    font-style: italic;
}

.container{
    margin-top:100px;
}

.card {
    box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
                0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
                0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
                0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
    border-width: 0;
    transition: all .2s;
}

.card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-header {
    display: flex;
    align-items: center;
    border-bottom-width: 1px;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0.625rem;
    height: 3.5rem;
    background-color: #fff;
}
.widget-subheading{
    color: #858a8e;
    font-size: 10px;
}
.card-header.card-header-tab .card-header-title {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.card-header .header-icon {
    font-size: 1.65rem;
    margin-right: 0.625rem;
}

.card-header.card-header-tab .card-header-title {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.btn-actions-pane-right {
    margin-left: auto;
    white-space: nowrap;
}

.text-capitalize {
    text-transform: capitalize !important;
}

.scroll-area-sm {
    height: 288px;
    overflow-x: hidden;
}

.list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
}

.todo-indicator {
    position: absolute;
    width: 4px;
    height: 60%;
    border-radius: 0.3rem;
    left: 0.625rem;
    top: 20%;
    opacity: .6;
    transition: opacity .2s;
}

.bg-warning {
    background-color: #f7b924 !important;
}

.widget-content {
    padding: 1rem;
    flex-direction: row;
    align-items: center;
}

.widget-content .widget-content-wrapper {
    display: flex;
    flex: 1;
    position: relative;
    align-items: center;
}

.widget-content .widget-content-right.widget-content-actions {
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s;
}

.widget-content .widget-content-right {
    margin-left: auto;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.btn {
    position: relative;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
}

.btn-outline-success {
    color: #3ac47d;
    border-color: #3ac47d;
}

.btn-outline-success:hover {
    color: #fff;
    background-color: #3ac47d;
    border-color: #3ac47d;
}

.btn-outline-success:hover {
    color: #fff;
    background-color: #3ac47d;
    border-color: #3ac47d;
}
.btn-primary {
    color: #fff;
    background-color: #3f6ad8;
    border-color: #3f6ad8;
}
.btn {
    position: relative;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    outline: none !important;
}

.card-footer{
    background-color: #fff;
}
</style>
