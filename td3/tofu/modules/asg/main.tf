resource "aws_launch_template" "app" {
  name_prefix   = var.name
  image_id      = var.ami_id
  instance_type = var.instance_type
  user_data     = var.user_data
}

resource "aws_autoscaling_group" "asg" {
  min_size = var.min_size
  max_size = var.max_size

  launch_template {
    id      = aws_launch_template.app.id
    version = "$Latest"
  }
}
