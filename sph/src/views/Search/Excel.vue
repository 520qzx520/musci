<template>
   <el-upload
        action
        accept=".xlsx, .xls"
        :on-change="handle"
        :file-list="fileList"
        :auto-upload="false"
        :before-remove="beforeRemove"
      >
        <template #trigger>
          <el-button size="small" type="primary" slot="trigger">
            选取文件
          </el-button>
        </template>
      </el-upload>
</template>

<script>
  import * as XLSX from 'xlsx';

export default {
     data() {
      return {

        fileList: [],
     
      };
    },

    methods: {
          handle(ev) {
        const that = this;
        // 拿取文件对象
        var f = ev.raw;
        if (!f) return;
        // 用FileReader来读取
        var reader = new FileReader();
        // 重写FileReader上的readAsBinaryString方法
        FileReader.prototype.readAsBinaryString = function (f) {
          var binary = '';
          var wb; // 读取完成的数据
          var outdata = []; // 你需要的数据
          var reader = new FileReader();
          reader.onload = function (e) {
            // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
            var bytes = new Uint8Array(reader.result);
            var length = bytes.byteLength;
            for (var i = 0; i < length; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            // 接下来就是xlsx了，具体可看api
            wb = XLSX.read(binary, {
              type: 'binary',
            });

            for (let i = 0; i < wb.SheetNames.length; i++) {
              let data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[i]]);
              if (data.length != 0) {
                outdata.push(data);
              }
              
            }
            
            // 自定义方法向父组件传递数据
            that.getExcel(outdata)

          };
          reader.readAsArrayBuffer(f);
        };
        reader.readAsBinaryString(f);
      },

      getExcel(outdata){
        
         var arr = [];
            outdata.forEach((item) => {
              item.forEach((data) => {
                let keys = Object.keys(data);
                let values = Object.values(data);
                let obj = {};
                for (let i = 0; i < keys.length; i++) {
                  (obj[keys[i]] = values[i]),
                    (obj[keys[i]] = values[i]),
                    (obj[keys[i]] = values[i]);
                }
                arr.push(obj);
              });
            });
            // console.log(arr)
             this.$emit('getResult', arr)
            
      },

       beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
      },

    }
}
</script>

<style>

</style>