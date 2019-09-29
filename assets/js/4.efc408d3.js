(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{788:function(e,t,a){"use strict";t.a={type:"object",defaultEntity:"platform_user",state:"save",properties:{id:{},name:{control:"input",title:"姓名"},loginName:{control:"input",title:"登录名",rules:{required:!0}},email:{control:"email",title:"邮箱",rules:{required:!0,email:!0},props:{placeholder:"xxx@xxx.xxx"}},avatar:{control:"image",title:"头像",value:"elliot"},sex:{control:"select",title:"性别",data:[{text:"保密",value:2},{text:"男",value:1},{text:"女",value:0}],props:{defaultValue:2}},tel:{control:"input",title:"电话",field:"telephone",entity:"platform_user",rules:{required:!0,numeric:!0,max:14},props:{placeholder:"电话号码"}},province:{control:"select",field:"provinceCode",title:"省份",ds:"province",value:"440000"},city:{control:"select",title:"城市",field:"cityCode",ds:"city",props:{defaultActiveIndex:0}},enable:{control:"checkbox",field:"checkState",title:"启用",value:1},description:{control:"textarea",title:"描述"}},layout:{type:"table",rows:[{cols:[{span:12,rows:[{cols:[{span:8,label:!0,field:"name"},{span:16,field:"name"}]},{cols:[{span:8,label:!0,field:"sex"},{span:16,field:"sex"}]},{cols:[{span:8,label:!0,field:"age"},{span:16,field:"age"}]},{cols:[{span:8,label:!0,field:"tel"},{span:16,field:"tel"}]}]},{span:4,label:!0,field:"avatar"},{span:8,field:"avatar"}]},{cols:[{span:4,label:!0,field:"province"},{span:8,field:"province"},{span:4,label:!0,field:"city"},{span:8,field:"city"}]},{cols:[{span:8,label:!0,field:"loginName"},{span:16,field:"loginName"},{span:8,label:!0,field:"email"},{span:16,field:"email"}]},{cols:[{span:24,rows:[{cols:[{span:4,label:!0,field:"description"},{span:20,field:"description"}]}]}]}],hidden:{common:{typeA:'gs:$ctx.form.type!=="typeA"',typeB:'gs:$ctx.form.type!=="typeB"',typeC:'gs:$ctx.form.type!=="typeC"'},update:{password:1,confirmPassword:2},create:{},read:{}}},ds:{province:{entity:"platform_province",lazy:!1,fields:"name,code",resultMapping:{text:"name",value:"code"},description:"这是一个下拉列表数据源"},city:{entity:"platform_city",lazy:!0,fields:"name,code",resultMapping:{text:"name",value:"code"},params:{provinceCode:"gs:$ctx.form.province"},description:"这是一个下拉列表数据源，带参数"}},vars:{myVarA:{description:"这是一个变量，变量名字为myVarA，值为30",value:"30"}},watch:{code:function(){}}}},789:function(e,t,a){"use strict";var l=a(788);t.a={title:"用户信息",entity:"platform_user",query:{show:!0,tree:null,filter:null,mix:{properties:[{field:"name",title:"名称",cop:"eq",control:"input",lop:"or",props:{placeholder:"姓名",defaultValue:""}},{field:"loginName",title:"账号",cop:"contains",control:"input",lop:"or",props:{placeholder:"登录名"}},{field:"sex",title:"性别",cop:"eq",control:"select",data:[{text:"保密",value:2},{text:"男",value:1},{text:"女",value:0}],props:{AddPreOptionText:"全部",AddPreOptionValue:void 0,placeholder:"请选择"}},{field:"description",title:"描述",cop:"contains",control:"input",lop:"and"},{field:"checkState",title:"激活",cop:"eq",control:"checkbox",props:{defaultValue:1}}],layout:{display:"auto",fieldPerRow:4}}},toolbar:{actions:[{text:"创建",icon:"plus",type:"primary",fn:"openModal",ctx:"this",params:{title:"编辑用户信息",width:"1200px",height:"480px",body:{type:"staticPage",component:"GlForm",props:{opts:JSON.parse(JSON.stringify(l.a))}},actions:[{text:"保存",type:"primary",fn:"save",ctx:"content",params:{},then:{fn:"close",ctx:"modal",then:{fn:"refresh",ctx:"opener"}}},{fn:"close",text:"取消",ctx:"modal"}]}}],css:{align:"right"}},alert:null,showPagination:"true",table:{rowAction:{actions:[{text:"修改",icon:"plus",type:"primary",fn:"openModal",ctx:"this",params:{title:"编辑用户信息",width:"1200px",height:"480px",body:{type:"staticPage",component:"GlForm",props:{opts:JSON.parse(JSON.stringify(l.a))}},actions:[{text:"保存",type:"primary",fn:"save",ctx:"content",params:{},then:{fn:"close",ctx:"modal",then:{fn:"refresh",ctx:"opener"}}},{fn:"close",text:"取消",ctx:"modal"}]},dataMapping:{query:{id:"$ctx.id"}}}]},columns:[{title:"#",dataIndex:"id",scopedSlots:{customRender:"serial"}},{title:"名称",dataIndex:"name",sorter:!0},{title:"登录名",dataIndex:"loginName",sorter:!0},{title:"电话",dataIndex:"telephone"},{title:"性别",dataIndex:"sex",sorter:!0,customRender:function(e){return 2===e?"保密":1===e?"男":"女"}},{title:"邮箱",dataIndex:"email"},{title:"次序",dataIndex:"seq",needTotal:!0},{title:"描述",dataIndex:"description"},{title:"操作",dataIndex:"",width:"150px",scopedSlots:{customRender:"action"}}],pageSize:20,order:"name|+"},stat:""}},790:function(e,t,a){"use strict";t.a={treeEntityName:"platform_dev_project",treeEntityPkField:"id",treeEntityNameField:"name",treeId:"UIYEHUWIUIYEHUWIUIYEHUWIUIYEHUWI",treeName:"测试项目",nodeEntityName:"platform_page_config",nodeEntityPkField:"id",nodeEntityNameField:"code",treeData:[{title:"CRM",key:"0-0",slots:{icon:"smile"},children:[{title:"客户信息",key:"0-0-0",slots:{icon:"meh"},children:[{title:"基础信息",key:"0-0-0-1",xtype:"file",scopedSlots:{icon:"custom"}},{title:"地址信息",key:"0-0-0-2",xtype:"file",scopedSlots:{icon:"custom"}}]},{title:"订单信息",key:"0-0-1",scopedSlots:{icon:"custom"}}]}],menuItems:[{label:"新建目录",icon:"folder"},{label:"新建页面",icon:"file"},{label:"新建接口",icon:"api"},{label:"重命名",icon:"edit"},{label:"删除",icon:"delete"}]}},792:function(e,t,a){"use strict";var l=a(788),o=a(789),i=a(790);t.a={cardMap:{table1:{id:"table1",title:"这是一个列表Card",actions:[{title:"更多"}],bordered:!0,style:"",content:{type:"static",component:"GlTable",props:{opts:JSON.parse(JSON.stringify(o.a))}},permission:"table1"},form1:{id:"form1",title:"这是一个表单Card",content:{type:"static",component:"GlForm",props:{opts:JSON.parse(JSON.stringify(l.a))}}},tree1:{id:"tree1",title:"这是一个树Card",content:{type:"static",component:"GlTree",props:JSON.parse(JSON.stringify(i.a))}},list1:{id:"tree1",title:"这是一个列表Card",content:{type:"static",component:"a-list",props:[{gender:"male",name:{title:"mr",first:"aldaír",last:"lima"},email:"aldaír.lima@example.com",nat:"BR"},{gender:"female",name:{title:"mrs",first:"ella",last:"gagnon"},email:"ella.gagnon@example.com",nat:"CA"},{gender:"male",name:{title:"mr",first:"jörgen",last:"seewald"},email:"jörgen.seewald@example.com",nat:"DE"},{gender:"female",name:{title:"miss",first:"molly",last:"wilson"},email:"molly.wilson@example.com",nat:"NZ"},{gender:"male",name:{title:"mr",first:"jean",last:"olivier"},email:"jean.olivier@example.com",nat:"FR"}]}}},layout:{title:"xxx",rows:[{gutter:10,cols:[{span:24,offset:0,card:"form1"}]},{gutter:10,cols:[{span:24,offset:0,card:"table1"}]},{gutter:10,cols:[{span:6,offset:0,card:"tree1"},{span:18,offset:0,card:"form1"}]},{gutter:10,cols:[{span:8,offset:0,card:"list1"},{span:16,offset:0,card:"table1"},{span:8,offset:0,rows:[{gutter:10,cols:[{span:8,offset:0},{span:12,offset:0}]}]}]}]},hidden:{common:{table1:'auth:$ctx.cards.table1"',table2:'gs:$ctx.form.type!=="typeB"',form1:'gs:$ctx.form.type!=="typeC"'},update:{},create:{},read:{}},vars:{myVarA:{description:"这是一个变量，变量名字为myVarA，值为30",value:"30"}}}},817:function(e,t,a){"use strict";a.r(t);var l=a(792),o={data:function(){return{config:l.a}},mounted:function(){},methods:{}},i=a(14),n=Object(i.a)(o,function(){var e=this.$createElement;return(this._self._c||e)("gl-card-layout",{attrs:{cardMap:this.config.cardMap,layout:this.config.layout}})},[],!1,null,"9b63c432",null);t.default=n.exports}}]);