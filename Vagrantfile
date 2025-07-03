# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # 1. Cấu hình Box: Sử dụng Ubuntu 20.04 (Focal Fossa) 64-bit.
  config.vm.box = "ubuntu/focal64"

 # Cấu hình provider là VirtualBox
  config.vm.provider "virtualbox" do |vb|
    # vb.memory = "2048" # Tùy chọn: cấp 2GB RAM
    # vb.cpus = "2"    # Tùy chọn: cấp 2 CPU
  end

  # 2. Cấu hình Mạng:
  # Chuyển tiếp (forward) cổng 8080 từ máy thật sang cổng 80 của máy ảo (cổng HTTP mặc định).
  # Giúp ta truy cập web server trên máy ảo từ trình duyệt máy thật qua địa chỉ http://localhost:8080
  config.vm.network "forwarded_port", guest: 80, host: 8080

  # 3. Cấu hình Thư mục Đồng bộ (Synced Folder):
  # Đồng bộ thư mục 'src' trên máy thật với thư mục '/var/www/project' trên máy ảo.
  # Bất kỳ thay đổi nào trong thư mục 'src' sẽ ngay lập tức được phản ánh trong máy ảo.
  config.vm.synced_folder "./src", "/var/www/project"
end