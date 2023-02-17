<!--
 * @Author: zyh
 * @Date: 2023-01-06 16:01:56
 * @LastEditors: zyh
 * @LastEditTime: 2023-02-17 13:43:59
 * @FilePath: /updater-server/README.md
 * @Description:
 *
 * Copyright (c) 2023 by 穿越, All Rights Reserved.
-->

## 文件服务器

- 将 electron 打包后的文件放在服务器上，通过 http 协议访问
- 放入 update/文件夹下即可，通过 ip:port/访问 update 文件夹下的文件

## docker

- docker buildx build -t update-server:v1 --platform linux/amd64 .

- docker run -d -p 7890:7890 --name update-server update-server:v1
