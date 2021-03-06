export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentColumns: [],
      currentData: [],
    }
  },
  render(h) {
    let _this = this;
    // console.log(_this); render
    // console.log(this);
    const ths = [];
    this.currentColumns.forEach((col, index) => {
      console.log(col);
      if (col.sortable) {

        ths.push(h('th', [
          h('span', col.title),
          h('a', {
            class: {
              on: col._sortType === 'asc'
            },
            on: {
              click() {
                _this.handleSortByAsc(index)
              }
            }
          }, '上'),
          h('a', {
            class: {
              on: col._sortType === 'desc'
            },
            on: {
              click() {
                _this.handleSortByDesc(index)
              }
            }
          }, '下'),
        ]))
      }
      else {
        ths.push(h('th', col.title))
      }
    });
    const trs = [];
    this.currentData.forEach(row => {
      debugger
      const tds = [];
      _this.currentColumns.forEach(cell => {
        tds.push(h('td',{
          class:{
            tdht:true,
          }
        } ,row[cell.key]))
      })
      trs.push(h('tr', tds));
    })
    return h('table', [
      h('thead', [
        h('tr', ths)
      ]),
      h('tbody', trs)
    ])
  },
  methods: {
    makeColumns() {
      this.currentColumns = this.columns.map((col, index) => {
        col._sortType = 'normal';
        col._index = index;
        return col;
      })
    },
    makeData() {
      this.currentData = this.data.map((row, index) => {
        row._index = index;
        return row;
      })
    },
    handleSortByAsc(index) {
      let key = this.currentColumns[index].key;
      this.currentColumns.forEach(col => {
        col._sortType = 'normal';
      })
      this.currentColumns[index]._sortType = 'asc';
      this.currentData.sort((a, b) => {
        return a[key] > b[key] ? 1 : -1;
      })
    },
    handleSortByDesc(index) {
      let key = this.currentColumns[index].key;
      this.currentColumns.forEach(col => {
        col._sortType = 'normal';
      })
      this.currentColumns[index]._sortType = 'desc';
      this.currentData.sort((a, b) => {
        return a[key] < b[key] ? 1 : -1;
      })
    },

  },
  watch:{
    data(){
      this.makeData();
      let sortedColumn=this.currentColumns.filter((col)=>{
        return col._sortType !=='normal';
      })
      if(sortedColumn.length>0){
        if(sortedColumn[0]._sortType==='asc'){
          this.handleSortByAsc(sortedColumn[0]._index);
        }
        else{
          this.handleSortByDesc(sortedColumn[0]._index);
        }
      }
    }
  },
  mounted(){
    this.makeColumns();
    this.makeData();
  }


}
