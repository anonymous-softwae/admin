<template>
    <Table border :draggable="true" size="small" :columns="columns1" :data="data1" @on-drag-drop="onDragDrop">
        <template slot-scope="{ row }" slot="total_points">
            振动测点3：{{ row.total_points }}<br>
            温度测点3：{{ row.total_points }}<br>
            压力测点3：{{ row.total_points }}
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="default" @click="show(index)">进入图谱</Button>
        </template>
    </Table>
</template>
<script>
export default {
  data () {
    return {
      columns1: [
        {
          type: 'index',
          title: '序号',
          width: 70,
          align: 'center'
        },
        {
          title: '装置名称',
          key: 'device_name',
          align: 'center'
        },
        {
          title: '设备名称',
          key: 'equip_name',
          align: 'center'
        },
        {
          title: '设备位号',
          key: 'equip_tag',
          align: 'center'
        },
        {
          title: '总测点数',
          slot: 'total_points',
          align: 'center'
        },
        {
          title: '正常测点数',
          key: 'normal_points',
          align: 'center'
        },
        {
          title: '正常百分率',
          key: 'normal_perct',
          align: 'center'
        },
        {
          title: '查看详情',
          slot: 'action',
          align: 'center'
        }
      ],
      data1: [
        {
          device_name: '催化装置',
          equip_name: '主风机',
          equip_tag: 'K1122',
          total_points: 100,
          normal_points: 80,
          normal_perct: 80 + '%',
          cellClassName: {
            normal_perct: 'demo-table-error-row'
          }
        },
        {
          device_name: '催化装置',
          equip_name: '备用风机',
          equip_tag: 'K1130',
          total_points: 100,
          normal_points: 60,
          normal_perct: 60 + '%',
          cellClassName: {
            normal_perct: 'demo-table-danger-row'
          }
        },
        {
          device_name: '焦化装置',
          equip_name: '焦化富气压缩机',
          equip_tag: 'K2300',
          total_points: 100,
          normal_points: 100,
          normal_perct: 100 + '%',
          cellClassName: {
            normal_perct: 'demo-table-alert-row'
          }
        },
        {
          device_name: '重整装置',
          equip_name: '重整循环氢压缩机',
          equip_tag: 'K1200',
          total_points: 100,
          normal_points: 90,
          normal_perct: 90 + '%',
          cellClassName: {
            normal_perct: 'demo-table-error-row'
          }
        },
        {
          device_name: '柴油加氢装置',
          equip_name: '柴油加氢压缩机',
          equip_tag: 'K6500',
          total_points: 100,
          normal_points: 55,
          normal_perct: 55 + '%',
          cellClassName: {
            normal_perct: 'demo-table-danger-row'
          }
        },
        {
          device_name: '苯乙烯装置',
          equip_name: '苯乙烯压缩机',
          equip_tag: 'K1122',
          total_points: 100,
          normal_points: 100,
          normal_perct: 100 + '%',
          cellClassName: {
            normal_perct: 'demo-table-alert-row'
          }
        },
        {
          device_name: '加氢处理装置',
          equip_name: '加氢处理压缩机',
          equip_tag: 'K2500',
          total_points: 100,
          normal_points: 93,
          normal_perct: 93 + '%',
          cellClassName: {
            normal_perct: 'demo-table-error-row'
          }
        },
        {
          device_name: '动力中心',
          equip_name: '汽轮发电机',
          equip_tag: 'Q2500',
          total_points: 100,
          normal_points: 93,
          normal_perct: 93 + '%',
          cellClassName: {
            normal_perct: 'demo-table-error-row'
          }
        },
        {
          device_name: '汽油加氢',
          equip_name: '汽油加氢压缩机',
          equip_tag: 'K3000',
          total_points: 100,
          normal_points: 73,
          normal_perct: 73 + '%',
          cellClassName: {
            normal_perct: 'demo-table-danger-row'
          }
        },
        {
          device_name: '汽油加氢',
          equip_name: '汽油加氢压缩机',
          equip_tag: 'K3000',
          total_points: 100,
          normal_points: 73,
          normal_perct: 73 + '%',
          cellClassName: {
            normal_perct: 'demo-table-danger-row'
          }
        },
        {
          device_name: '汽油加氢',
          equip_name: '汽油加氢压缩机',
          equip_tag: 'K3000',
          total_points: 100,
          normal_points: 73,
          normal_perct: 73 + '%',
          cellClassName: {
            normal_perct: 'demo-table-danger-row'
          }
        },
        {
          device_name: '汽油加氢',
          equip_name: '汽油加氢压缩机',
          equip_tag: 'K3000',
          total_points: 100,
          normal_points: 73,
          normal_perct: 73 + '%',
          cellClassName: {
            normal_perct: 'demo-table-danger-row'
          }
        },
        {
          device_name: '汽油加氢',
          equip_name: '汽油加氢压缩机',
          equip_tag: 'K3000',
          total_points: 100,
          normal_points: 73,
          normal_perct: 73 + '%',
          cellClassName: {
            normal_perct: 'demo-table-danger-row'
          }
        },
        {
          device_name: '汽油加氢',
          equip_name: '汽油加氢压缩机',
          equip_tag: 'K3000',
          total_points: 100,
          normal_points: 73,
          normal_perct: 73 + '%',
          cellClassName: {
            normal_perct: 'demo-table-danger-row'
          }
        },
        {
          device_name: '焦化装置',
          equip_name: '焦化富气压缩机',
          equip_tag: 'K2300',
          total_points: 100,
          normal_points: 100,
          normal_perct: 100 + '%',
          cellClassName: {
            normal_perct: 'demo-table-alert-row'
          }
        },
        {
          device_name: '重整装置',
          equip_name: '重整循环氢压缩机',
          equip_tag: 'K1200',
          total_points: 100,
          normal_points: 90,
          normal_perct: 90 + '%',
          cellClassName: {
            normal_perct: 'demo-table-error-row'
          }
        },
        {
          device_name: '柴油加氢装置',
          equip_name: '柴油加氢压缩机',
          equip_tag: 'K6500',
          total_points: 100,
          normal_points: 55,
          normal_perct: 55 + '%',
          cellClassName: {
            normal_perct: 'demo-table-danger-row'
          }
        },
        {
          device_name: '苯乙烯装置',
          equip_name: '苯乙烯压缩机',
          equip_tag: 'K1122',
          total_points: 100,
          normal_points: 100,
          normal_perct: 100 + '%',
          cellClassName: {
            normal_perct: 'demo-table-alert-row'
          }
        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: '设备状态详情',
        content: `装置名称：${this.data1[index].device_name}<br>
                  设备名称：${this.data1[index].equip_name}<br>
                  设备位号：${this.data1[index].equip_tag}<br>
                  测点总数：${this.data1[index].total_points}<br>
                  正常点数：${this.data1[index].normal_points}<br>
                  正常率：${this.data1[index].normal_perct}<br>`
      })
    },
    rowClassName (row, index) {
      if (index === 2) {
        return 'demo-table-alert-row'
      } else if (index === 3) {
        return 'demo-table-error-row'
      } else if (index === 8) {
        return 'demo-table-danger-row'
      }
      return ''
    },
    onDragDrop (a, b) {
      console.log(a, b)
      this.data1.splice(b, 1, ...this.data1.splice(a, 1, this.data1[b]))
    }
  }
}
</script>
<style>
    .ivu-table .demo-table-alert-row{
        background-color: rgb(10, 187, 4);
        color: #fff;
    }
    .ivu-table .demo-table-error-row{
        background-color: #ff7920;
        color: #fff;
    }
    .ivu-table .demo-table-danger-row{
        background-color: #ff0000;
        color: #fff;
    }
</style>
