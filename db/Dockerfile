FROM postgres:latest

# SSH
RUN apt-get update && apt-get install -y openssh-server
RUN echo "root:Docker!" | chpasswd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN mkdir /var/run/sshd

EXPOSE 22

CMD service ssh start && docker-entrypoint.sh postgres
