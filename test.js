const users = [
  { id: 1, name: "asgdshfgfsdaf", age: 12, email: "asgdshfgfsdaf@qq.com" },
  { id: 2, name: "dsgdsgbfsdafv", age: 21, email: "dsgdsgbfsdafv@qq.com" },
  { id: 3, name: "vdvdsfdgnb", age: 24, email: "vdvdsfdgnb@qq.com" },
  { id: 4, name: "dvsfbdsvd", age: 23, email: "dvsfbdsvd@qq.com" },
  { id: 5, name: "fassdgfa", age: 35, email: "fassdgfa@qq.com" },
  { id: 6, name: "asfffsdsfbdv", age: 76, email: "asfffsdsfbdv@qq.com" },
  { id: 7, name: "fafdvv", age: 23, email: "fafdvv@qq.com" },
];

class Paginator {
  constructor(data, itemsPerPage) {
    this.data = data;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
  }

  get totalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get totalItems() {
    return this.data.length;
  }

  get currentPageData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get hasPreviousPage() {
    return this.currentPage > 1;
  }

  get hasNextPage() {
    return this.currentPage < this.totalPages;
  }

  nextPage() {
    if (this.hasNextPage) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.hasPreviousPage) {
      this.currentPage--;
    }
  }
}

// 创建分页对象
const paginator = new Paginator(users, 2);

// 输出初始状态
console.log(
  "分页后当前页集合数据:",
  paginator.currentPageData
    .map(
      (user) =>
        `User(id=${user.id}，name=${user.name}，age=${user.age}，email=${user.email})`
    )
    .join("，")
);
console.log(`分页后总页码数:${paginator.totalPages}`);
console.log(`分页后总记录数${paginator.totalItems}`);
// console.log(`当前页码${paginator.currentPage}`); // 当前页码
console.log(`分页后每页显示条数:${paginator.itemsPerPage}`);
console.log(`是否存在上一页:${paginator.hasPreviousPage}`);
console.log(`是否存在下一页:${paginator.hasNextPage}`);

// 模拟翻页操作
paginator.nextPage();
console.log("\n翻到下一页后:");
console.log("分页后当前页码数:", paginator.currentPage);
console.log(
  "分页后当前页集合数据:",
  paginator.currentPageData
    .map(
      (user) =>
        `User(id=${user.id}，name=${user.name}，age=${user.age}，email=${user.email})`
    )
    .join("，")
);
console.log(`分页后总页码数:${paginator.totalPages}`);
console.log(`分页后总记录数${paginator.totalItems}`);
console.log(`分页后每页显示条数:${paginator.itemsPerPage}`);
console.log(`是否存在上一页:${paginator.hasPreviousPage}`);
console.log(`是否存在下一页:${paginator.hasNextPage}`);
