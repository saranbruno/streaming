create table users
(
    id        uuid default extensions.gen_random_uuid() not null
        constraint users_pk
            primary key,
    name      varchar(255)                              not null,
    mail      varchar(255)                              not null,
    biography text,
    image_url varchar(255)
);

alter table users
    owner to postgres;

grant delete, insert, references, select, trigger, truncate, update on users to anon;

grant delete, insert, references, select, trigger, truncate, update on users to authenticated;

grant delete, insert, references, select, trigger, truncate, update on users to service_role;

