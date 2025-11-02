variable "ami_id" {
  type    = string
  default = "ami-0d6138036afbd7efb"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

variable "min_size" {
  type    = number
  default = 1
}

variable "max_size" {
  type    = number
  default = 3
}

variable "user_data" {
  type    = string
  default = ""
}
