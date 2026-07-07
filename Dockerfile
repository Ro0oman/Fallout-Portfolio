# Static portfolio served by nginx
FROM nginx:alpine

# Custom nginx config (gzip, caching, clean routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the site into nginx web root
COPY . /usr/share/nginx/html

# Remove files that shouldn't be served
RUN rm -f /usr/share/nginx/html/Dockerfile \
          /usr/share/nginx/html/nginx.conf \
          /usr/share/nginx/html/.dockerignore \
          /usr/share/nginx/html/README.md

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
