provider "aws" {
  region = "us-east-2"
}

module "asg" {
  source          = "git::https://github.com/MaxenceDELEHELLE/DevOps.git//td3/tofu/modules/asg?ref=main"
  name            = "sample-app-asg"
  ami_id          = "ami-0d6138036afbd7efb" # Replace with your AMI ID
  user_data       = filebase64("${path.module}/user-data.sh")
  app_http_port   = 8080
  instance_type   = "t3.micro"
  min_size        = 1
  max_size        = 10
  desired_capacity = 3
}
