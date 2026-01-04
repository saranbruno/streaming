create table videos
(
    id                uuid      default extensions.gen_random_uuid() not null
        constraint videos_pk
            primary key,
    name              varchar(255)                                   not null,
    description       text,
    image_url         varchar(255),
    uploading_user_id uuid                                           not null
        constraint videos_users_id_fk
            references users,
    uploading_date    timestamp default now()                        not null
);

alter table videos
    owner to postgres;

grant delete, insert, references, select, trigger, truncate, update on videos to anon;

grant delete, insert, references, select, trigger, truncate, update on videos to authenticated;

grant delete, insert, references, select, trigger, truncate, update on videos to service_role;

